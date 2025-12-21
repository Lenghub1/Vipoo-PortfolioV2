import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { navigationLinks } from "../../routes/routes.config";
import { CONTENT_MAX_WIDTH } from "../../theme/layout";
import FloatingCTAButton from "../shared/FloatingCTAButton";

const Header: React.FC = () => {
  const location = useLocation();
  const [heroInView, setHeroInView] = React.useState(false);

  React.useEffect(() => {
    const heroEl = document.getElementById("hero-section");

    if (!heroEl) {
      setHeroInView(false);
      return;
    }

    const updateHeroVisibility = () => {
      const rect = heroEl.getBoundingClientRect();
      setHeroInView(rect.bottom > 0);
    };

    updateHeroVisibility();

    window.addEventListener("scroll", updateHeroVisibility, { passive: true });
    window.addEventListener("resize", updateHeroVisibility);

    return () => {
      window.removeEventListener("scroll", updateHeroVisibility);
      window.removeEventListener("resize", updateHeroVisibility);
    };
  }, [location.pathname]);

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        height: "64px",
        position: "sticky",
        top: 0,
        bgcolor: "background.default",
        zIndex: 1000,
        px: { xs: "24px", md: 0 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: `${CONTENT_MAX_WIDTH}px`,
          height: "100%",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src="/hello/viphoulogo.svg"
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

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {navigationLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: isActive ? "white" : "text.secondary",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "white",
                      "& img": {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "13px" }}>
                    {link.label}
                  </Typography>

                  {link.icon && (
                    <Box
                      component="img"
                      src={link.icon}
                      alt="icon"
                      sx={{
                        width: 16,
                        height: 16,
                        opacity: isActive ? 1 : 0.5,
                        transition: "opacity 0.2s ease",
                      }}
                    />
                  )}
                </Box>
              </Link>
            );
          })}
        </Box>

        <FloatingCTAButton
          label="Get in touch"
          iconSrc="hello/hi5.svg"
          appearance={heroInView ? "ghost" : "solid"}
          height={40}
          borderRadius={20}
          paddingX={18}
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
                borderColor: "transparent",
              },
            }),
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
