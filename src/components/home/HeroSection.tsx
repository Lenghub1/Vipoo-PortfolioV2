import React from "react";
import { Box, Typography } from "@mui/material";
import { clients } from "../../data/projects.data";
import { contacts as contactLinks } from "../../data/contacts.data";
import FloatingCTAButton from "../shared/FloatingCTAButton";

const HeroSection: React.FC = () => {
  const primaryEmailContact =
    contactLinks.find((contact) => contact.label.toLowerCase() === "email") ??
    contactLinks[0];
  const duplicatedClients = [...clients, ...clients];
  const [titleVisible, setTitleVisible] = React.useState(false);
  const [descriptionVisible, setDescriptionVisible] = React.useState(false);
  const [marqueeVisible, setMarqueeVisible] = React.useState(false);
  const [ctaVisible, setCtaVisible] = React.useState(false);

  React.useEffect(() => {
    setTitleVisible(false);
    setDescriptionVisible(false);
    setMarqueeVisible(false);
    setCtaVisible(false);

    if (typeof window === "undefined") {
      setTitleVisible(true);
      setDescriptionVisible(true);
      setMarqueeVisible(true);
      setCtaVisible(true);
      return;
    }

    const titleTimer = window.setTimeout(() => setTitleVisible(true), 80);
    const descTimer = window.setTimeout(() => setDescriptionVisible(true), 160);
    const marqueeTimer = window.setTimeout(() => setMarqueeVisible(true), 240);
    const ctaTimer = window.setTimeout(() => setCtaVisible(true), 420);

    return () => {
      window.clearTimeout(titleTimer);
      window.clearTimeout(descTimer);
      window.clearTimeout(marqueeTimer);
      window.clearTimeout(ctaTimer);
    };
  }, []);

  return (
    <Box
      id="hero-section"
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 12, md: "200px" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          mb: "24px",
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          opacity: titleVisible ? 1 : 0,
          filter: titleVisible ? "blur(0px)" : "blur(10px)",
          transform: titleVisible ? "translateY(0)" : "translateY(16px)",
          transition:
            "opacity 600ms ease, filter 600ms ease, transform 600ms ease",
        }}
      >
        This is viphou.
      </Typography>
      <Typography
        sx={{
          mb: "32px",
          fontSize: "19px",
          color: "text.secondary",
          opacity: descriptionVisible ? 1 : 0,
          filter: descriptionVisible ? "blur(0px)" : "blur(10px)",
          transform: descriptionVisible ? "translateY(0)" : "translateY(16px)",
          transition:
            "opacity 600ms ease, filter 600ms ease, transform 600ms ease",
        }}
      >
        He design and build digital products that connect clarity with craft &
        the belief it's one of the most malleable mediums we have.
      </Typography>
      <Box
        sx={{
          mb: "40px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          opacity: marqueeVisible ? 1 : 0,
          filter: marqueeVisible ? "blur(0px)" : "blur(8px)",
          transform: marqueeVisible ? "translateY(0)" : "translateY(14px)",
          transition:
            "opacity 600ms ease, filter 600ms ease, transform 600ms ease",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: { xs: "40px", md: "80px" },
            zIndex: 1,
            pointerEvents: "none",
          },
          "&::before": {
            left: 0,
            background:
              "linear-gradient(90deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 100%)",
          },
          "&::after": {
            right: 0,
            background:
              "linear-gradient(270deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 100%)",
          },
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            animation: "scrollClients 20s linear infinite",
            "@keyframes scrollClients": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <Box
              key={`${client.name}-${index}`}
              component="img"
              src={client.logo}
              alt={client.name}
              sx={{
                display: "inline-block",
                height: "100%",
                maxWidth: "120px",
                objectFit: "contain",
                opacity: 1,
                filter: "grayscale(100%)",
                mx: { xs: 3, md: 5 },
                transition: "0.3s ease",
                verticalAlign: "middle",
              }}
            />
          ))}
        </Box>
      </Box>

      <FloatingCTAButton
        label="Get in touch"
        iconSrc="global/hi5.svg"
        appearance="solid"
        height={48}
        borderRadius={24}
        component={primaryEmailContact ? "a" : "button"}
        href={primaryEmailContact?.href}
        sx={{
          width: "fit-content",
          fontSize: "1rem",
          fontWeight: 600,
          opacity: ctaVisible ? 1 : 0,
          filter: ctaVisible ? "blur(0px)" : "blur(6px)",
          transform: ctaVisible ? "translateY(0)" : "translateY(12px)",
          transition:
            "opacity 600ms ease, filter 600ms ease, transform 600ms ease, scale 150ms ease",
          "&:active": {
            scale: 0.97,
          },
        }}
      />
    </Box>
  );
};

export default HeroSection;
