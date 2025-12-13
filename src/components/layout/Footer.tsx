import React from "react";
import { Box, Typography, Link } from "@mui/material";
import type { Project } from "../../types/project.types";
import type { Contact } from "../../types/contact.types";
import { CONTENT_MAX_WIDTH } from "../../theme/layout";
// Example contact data

interface FooterProps {
  projects: Project[];
  contacts: Contact[];
}

const Footer: React.FC<FooterProps> = ({ projects, contacts }) => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: "120px",
        backgroundColor: "#101112",

        bottom: 0,
        zIndex: 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: `${CONTENT_MAX_WIDTH}px`,
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: 4,
            alignItems: "start",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "453px" } }}>
            <Typography
              variant="h6"
              sx={{
                mb: "24px",
                fontSize: "20px",
                fontFamily: "serifStack",
              }}
            >
              Product
            </Typography>

            {projects?.map((project) => (
              <Box key={project.id} display="flex" gap={1}>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1, cursor: "pointer" }}
                >
                  {project.title}
                </Typography>
                {!project.active && (
                  <Box
                    component="img"
                    src="hello/lock.svg"
                    alt="lock Logo"
                    sx={{ width: "18.44px", height: "18.44px", opacity: 0.5 }}
                  />
                )}
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "start",
              gap: { xs: 2, md: 0 },
              width: { xs: "100%", md: "453px" },
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: "24px",
                  fontSize: "20px",
                  fontFamily: "serifStack",
                }}
              >
                Contact
              </Typography>

              {contacts?.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  underline="none"
                  sx={{ display: "block", color: "text.secondary", mb: 1 }}
                >
                  {contact.value}
                </Link>
              ))}
            </Box>

            <Box
              component="img"
              src="hello/viphoulogo.svg"
              alt="Viphou Logo"
              sx={{ width: "44px", height: "44px" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
