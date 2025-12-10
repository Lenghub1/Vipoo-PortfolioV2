import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { clients } from "../../data/projects.data";

const HeroSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 } }}>
      <Container>
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
            display: "flex",
            gap: { xs: 2, md: "102px" },
            flexWrap: "wrap",
            mb: 6,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {clients.map((client, index) => (
            <Box
              key={index}
              component="img"
              src={client.logo}
              alt={client.name}
              sx={{
                width: { xs: 70, md: 100 },
                height: "auto",
                opacity: 0.6,
                filter: "grayscale(100%)",
                transition: "0.3s ease",
                "&:hover": {
                  opacity: 1,
                  filter: "grayscale(0%)",
                },
              }}
            />
          ))}
        </Box>

        <Button
          variant="contained"
          sx={{
            bgcolor: "primary.main",
            color: "black",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            "&:hover": {
              bgcolor: "#ffc940",
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
      </Container>
    </Box>
  );
};

export default HeroSection;
