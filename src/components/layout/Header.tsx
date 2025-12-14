import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { navigationLinks } from "../../routes/routes.config";
import { CONTENT_MAX_WIDTH } from "../../theme/layout";

const Header: React.FC = () => {
  const location = useLocation();

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

        <Button
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "black",
            fontSize: "13px",
            px: "12px",
            fontWeight: 600,
            "&:hover": {
              bgcolor: "#ffc940",
            },
          }}
        >
          Get in touch
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
