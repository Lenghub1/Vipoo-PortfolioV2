import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { projects } from "../../data/projects.data";
import { contacts } from "../../data/contacts.data";
import { CONTENT_MAX_WIDTH } from "../../theme/layout";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        sx={{
          flex: 1,
          position: "relative",
          zIndex: 1,
          backgroundColor: "background.default",

          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "1px",
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.2) 2px, transparent 2px, transparent 4px)",
            zIndex: 1,
          },
        }}
      >
        <Box
          component="main"
          sx={{
            width: "100%",
            maxWidth: `${CONTENT_MAX_WIDTH}px`,
            mx: "auto",
            minHeight: "100vh",
            pb: "120px",
          }}
        >
          {children}
        </Box>
      </Box>
      <Footer projects={projects} contacts={contacts} />
    </Box>
  );
};

export default Layout;
