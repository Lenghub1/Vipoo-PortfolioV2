import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { navigationLinks } from "../../routes/routes.config";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Box
      component="header"
      sx={{
        py: 3,
        px: { xs: 2, md: 6 },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        bgcolor: "background.default",
        zIndex: 1000,
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: "primary.main",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: 600,
              fontFamily: '"Inter", sans-serif',
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
                <Typography variant="body1">{link.label}</Typography>

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

      <Button
        variant="contained"
        sx={{
          bgcolor: "white",
          color: "black",
          px: 3,
          fontWeight: 600,
          "&:hover": {
            bgcolor: "#ffc940",
          },
        }}
      >
        Get in touch
      </Button>
    </Box>
  );
};

export default Header;
