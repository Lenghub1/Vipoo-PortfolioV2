import React from "react";
import { Box, Typography } from "@mui/material";
import { clients } from "../../data/projects.data";
import FloatingCTAButton from "../shared/FloatingCTAButton";

const HeroSection: React.FC = () => {
  const duplicatedClients = [...clients, ...clients];

  return (
    <Box id="hero-section" sx={{ py: { xs: 8, md: 12 } }}>
      <Typography
        variant="h1"
        sx={{
          mb: 3,
          fontSize: { xs: "2.5rem", md: "3.5rem" },
        }}
      >
        This is viphou.
      </Typography>
      <Typography
        sx={{
          mb: 4,
          fontSize: "19px",
          color: "text.secondary",
        }}
      >
        He design and build digital products that connect clarity with craft &
        the belief it's one of the most malleable mediums we have.
      </Typography>

      <Box
        sx={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          mb: 6,
          position: "relative",
          height: { xs: "60px", md: "80px" },
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
                opacity: 0.6,
                filter: "grayscale(100%)",
                mx: { xs: 3, md: 5 },
                transition: "0.3s ease",
                verticalAlign: "middle",
                "&:hover": {
                  opacity: 1,
                  filter: "grayscale(0%)",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      <FloatingCTAButton
        label="Get in touch"
        iconSrc="hello/hi5.svg"
        appearance="solid"
        height={48}
        borderRadius={24}
        sx={{ fontSize: "1rem", fontWeight: 600 }}
      />
    </Box>
  );
};

export default HeroSection;
