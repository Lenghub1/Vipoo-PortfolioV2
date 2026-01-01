import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";
// import type { Project } from "../../types/project.types";
import type { Contact } from "../../types/contact.types";
import { CONTENT_MAX_WIDTH, GLOBAL_PX } from "../../theme/layout";
// Example contact data

interface FooterProps {
  // projects: Project[];
  contacts: Contact[];
}

const Footer: React.FC<FooterProps> = ({ contacts }) => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        position: "fixed",
        left: 0,
        right: 0,
        py: "60px",
        bottom: 0,
        zIndex: 0,
        bgcolor: "background.default",
      }}
    >
      <Container sx={{ pointerEvents: "auto" }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: `${CONTENT_MAX_WIDTH}px`,
            px: `${GLOBAL_PX}px`,
            mx: "auto",
            height: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "28px", sm: "32px" },
              // justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "auto",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontFamily: "serifStack",
                }}
              >
                Contact
              </Typography>
              <Typography
                sx={{
                  display: "block",
                  color: "text.secondary",
                }}
              >
                v2.0.0
              </Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {contacts?.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    display: "block",
                    color: "text.secondary",

                    transition: "color 0.1s ease-out",
                    "&:hover": { color: "text.primary" },
                  }}
                >
                  {contact.value}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
