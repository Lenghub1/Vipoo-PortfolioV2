import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { contacts } from "../../data/contacts.data";

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
        position: "relative",
        zIndex: 1,
      }}
    >
      <Header />

      <Box
        sx={{
          flex: 1,
          position: "relative",
          zIndex: 1,
          backgroundColor: "background.default",
          mb: { xs: "220px", md: "260px" },
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {children}
      </Box>

      <Footer contacts={contacts} />
    </Box>
  );
};

export default Layout;
