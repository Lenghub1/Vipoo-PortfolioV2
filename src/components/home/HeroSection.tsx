import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { keyframes } from "@emotion/react";

const marquee = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const heroLogos = [
  { alt: "ABA Bank logo", src: "/company/aba.svg" },
  { alt: "Edemy logo", src: "/company/edemy.svg" },
  { alt: "Ministry of Economy & Finance logo", src: "/company/mef.svg" },
  { alt: "Melon Rouge Agency logo", src: "/company/mra.svg" },
  { alt: "Smart Axiata logo", src: "/company/smart.svg" },
];

const HeroSection: React.FC = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  const marqueeDuration = "32s";
  const marqueeItems = React.useMemo(() => [...heroLogos, ...heroLogos], []);

  return (
    <Box
      component="section"
      sx={{
        mt: "120px",
        mb: "96px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          mb: "24px",
        }}
      >
        This is viphou.
      </Typography>
      <Typography
        sx={{
          mb: "32px",
          fontSize: "17px",
          lineHeight: "26px",
          color: "text.secondary",
        }}
      >
        He design and build digital products that connect clarity with craft &
        the belief it's one of the most malleable mediums we have.
      </Typography>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          mb: "40px",
          background: "rgba(10, 10, 10, 0.9)",
          backdropFilter: "blur(16px)",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: { xs: 64, md: 160 },
            pointerEvents: "none",
            zIndex: 1,
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
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "72px",
            width: "max-content",
            animationName: `${marquee}`,
            animationDuration: marqueeDuration,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationFillMode: "forwards",
            animationPlayState: isPaused ? "paused" : "running",
            transition: "animation-duration 0.4s ease-out",
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
              transform: "none",
            },
          }}
        >
          {marqueeItems.map((logo, index) => (
            <Box
              key={`${logo.alt}-${index}`}
              component="img"
              src={logo.src}
              alt={logo.alt}
              sx={{
                width: "auto",
                height: "32px",
                opacity: 0.8,
                filter: "grayscale(100%)",

                transition: "opacity 0.3s ease-out, filter 0.3s ease-out",
                flexShrink: 0,
                "&:hover": {
                  opacity: 1,
                  filter: "grayscale(0%)",
                },
              }}
              loading="lazy"
            />
          ))}
        </Box>
      </Box>

      <Button
        variant="contained"
        disableRipple
        sx={{
          bgcolor: "primary.main",
          color: "black",
          transform: "scale(1)",
          transition: "transform 0.2s cubic-bezier(.215,.61,.355,1)",
          pl: "22px",
          pr: "24px",
          py: "8px",
          fontWeight: 600,
          fontSize: "1rem",
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          "&:hover": {
            transform: "scale(1.03)",
          },
          "&:active": {
            transform: "scale(0.98)",
          },
        }}
      >
        <Box
          component="img"
          src="hello/hi5.svg"
          alt="Hi5"
          sx={{ width: "18.54px", height: "18.54px" }}
        />
        Get in touch
      </Button>
    </Box>
  );
};

export default HeroSection;
