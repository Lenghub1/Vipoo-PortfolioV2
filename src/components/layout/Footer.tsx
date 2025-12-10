import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import type { Project } from "../../types/project.types";
import type { Contact } from "../../types/contact.types";
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
        py: 6,
        px: { xs: 2, md: 6 },
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: 4,
            alignItems: "start",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "453px" } }}>
            <Typography variant="h6" sx={{ mb: 2, fontSize: "1rem" }}>
              Product
            </Typography>

            {projects?.map((project) => (
              <Box display="flex" gap={1}>
                <Typography
                  key={project.id}
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
              alignItems: { xs: "flex-start", md: "center" },
              gap: { xs: 2, md: 0 },
              width: { xs: "100%", md: "453px" },
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontSize: "1rem" }}>
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
      </Container>
    </Box>
  );
};

export default Footer;
