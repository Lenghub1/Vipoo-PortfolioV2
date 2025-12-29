import React from "react";
import { Box } from "@mui/material";
import { CONTENT_MAX_WIDTH, GLOBAL_PX } from "../../theme/layout";

interface MainContentProps {
  children: React.ReactNode;
}

const HomePageLayout: React.FC<MainContentProps> = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        maxWidth: `${CONTENT_MAX_WIDTH}px`,
        mx: "auto",
        minHeight: "100vh",
        pb: "120px",
        px: `${GLOBAL_PX}px`,
      }}
    >
      {children}
    </Box>
  );
};

export default HomePageLayout;
