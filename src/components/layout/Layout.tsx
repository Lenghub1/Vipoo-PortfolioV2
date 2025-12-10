import React from "react";
import { Box, Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { projects } from "../../data/projects.data";
import { contacts } from "../../data/contacts.data";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        maxWidth: "938px",
      }}
    >
      <Header />
      <Box component="main">{children}</Box>
      <Footer projects={projects} contacts={contacts} />
    </Container>
  );
};

export default Layout;
