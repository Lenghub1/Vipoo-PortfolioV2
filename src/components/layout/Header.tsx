import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navigationLinks } from "../../routes/routes.config";
import { CONTENT_MAX_WIDTH } from "../../theme/layout";
import FloatingCTAButton from "../shared/FloatingCTAButton";
import { contacts as contactLinks } from "../../data/contacts.data";

const primaryEmailContact =
  contactLinks.find(
    (contact) => contact.label.toLowerCase() === "email"
  ) ?? contactLinks[0];

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [heroInView, setHeroInView] = React.useState(false);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const [pendingScrollSection, setPendingScrollSection] = React.useState<
    string | null
  >(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    let heroEl: HTMLElement | null = null;

    const findHeroAndAttach = () => {
      heroEl = document.getElementById("hero-section");

      if (!heroEl) {
        requestAnimationFrame(findHeroAndAttach);
        return;
      }

      const updateHeroVisibility = () => {
        const rect = heroEl!.getBoundingClientRect();
        setHeroInView(rect.bottom > 0);
      };

      updateHeroVisibility();

      window.addEventListener("scroll", updateHeroVisibility, {
        passive: true,
      });
      window.addEventListener("resize", updateHeroVisibility);

      cleanup = () => {
        window.removeEventListener("scroll", updateHeroVisibility);
        window.removeEventListener("resize", updateHeroVisibility);
      };
    };

    let cleanup = () => {};
    findHeroAndAttach();

    return () => cleanup();
  }, [location.pathname]);

  const scrollToSection = React.useCallback((sectionId: string) => {
    if (typeof window === "undefined") {
      return;
    }
    const sectionEl = document.getElementById(sectionId);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  React.useEffect(() => {
    if (location.pathname === "/" && pendingScrollSection) {
      const timeoutId = window.setTimeout(() => {
        scrollToSection(pendingScrollSection);
        setPendingScrollSection(null);
      }, 50);
      return () => window.clearTimeout(timeoutId);
    }
    return undefined;
  }, [location.pathname, pendingScrollSection, scrollToSection]);

  const handleNavigationClick = React.useCallback(
    (sectionId: string) => {
      if (location.pathname !== "/") {
        setPendingScrollSection(sectionId);
        navigate("/");
        return;
      }
      scrollToSection(sectionId);
    },
    [location.pathname, navigate, scrollToSection]
  );

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        height: "64px",
        position: "sticky",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        top: 0,
        bgcolor: "background.default",
        zIndex: 1000,
        opacity: hasAnimated ? 1 : 0,
        transform: hasAnimated ? "translateY(0)" : "translateY(-20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: `${CONTENT_MAX_WIDTH}px`,
          px: "24px",
          height: "100%",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              width: { xs: "auto", md: "200px" },
            }}
          >
            <Box
              component="img"
              src="/global/viphoulogo.svg"
              alt="Viphou logo"
              sx={{
                width: "auto",
                height: "20px",
                transition: "opacity 0.3s ease-out, filter 0.3s ease-out",
                flexShrink: 0,
                "&:hover": {
                  opacity: 1,
                  filter: "grayscale(0%)",
                },
              }}
              loading="lazy"
            />
            <Typography
              sx={{
                color: "white",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Viphou
            </Typography>
          </Box>
        </Link>

        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4 }}>
          {navigationLinks.map((link) => {
            const isLocked = Boolean(link.locked);
            const isActive = location.pathname === "/" && !isLocked;

            return (
              <Box
                key={link.sectionId}
                component="button"
                type="button"
                disabled={isLocked}
                onClick={() => handleNavigationClick(link.sectionId)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: isActive ? "white" : "text.secondary",
                  cursor: isLocked ? "not-allowed" : "pointer",
                  transition: "color 0.2s ease",
                  background: "none",
                  border: "none",
                  p: 0,
                  font: "inherit",
                  opacity: isLocked ? 0.6 : 1,
                  "&:hover": {
                    color: isLocked ? "text.secondary" : "white",
                    "& img": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Typography sx={{ fontSize: "15px" }}>
                  {link.label}
                </Typography>

                {isLocked && (
                  <Box
                    component="img"
                    src="/global/lock.svg"
                    alt="Locked"
                    sx={{
                      height: 12.65,
                      opacity: isActive ? 1 : 0.5,
                      transition: "opacity 0.2s ease",
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            width: {
              xs: "auto",
              md: "200px",
              display: "flex",
              justifyContent: "end",
            },
          }}
        >
          <FloatingCTAButton
            label="Get in touch"
            iconSrc="/global/hi5.svg"
            appearance={heroInView ? "ghost" : "solid"}
            height={40}
            borderRadius={20}
            paddingX={18}
            component={primaryEmailContact ? "a" : "button"}
            href={primaryEmailContact?.href}
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              "& .cta-icon": {
                display: heroInView ? "none" : "block",
                opacity: heroInView ? 0 : 1,
                transform: heroInView ? "translateX(8px)" : "translateX(16px)",
                ...(heroInView
                  ? { animation: "none" }
                  : {
                      animation: "ctaIconSlide 0.4s ease forwards",
                    }),
              },
              "@keyframes ctaIconSlide": {
                "0%": { opacity: 0, transform: "translateX(16px)" },
                "100%": { opacity: 1, transform: "translateX(0)" },
              },
              ...(heroInView && {
                "&:hover": {
                  bgcolor: "#FFFFFF",
                  color: "#000000",
                  border: "1px solid rgba(255,255,255,0)",
                },
              }),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
