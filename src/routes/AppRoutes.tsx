import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { routes } from "./routes.config";

import ScrollToTop from "../components/scroll/ScrollToTop";
const LoadingFallback: React.FC = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh",
    }}
  >
    <CircularProgress sx={{ color: "primary.main" }} />
  </Box>
);

const NotFoundPage: React.FC = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "60vh",
      textAlign: "center",
      px: 2,
    }}
  >
    <Box
      sx={{
        fontSize: "6rem",
        fontWeight: 700,
        color: "primary.main",
        mb: 2,
      }}
    >
      404
    </Box>
    <Box sx={{ fontSize: "1.5rem", mb: 3, color: "text.primary" }}>
      Page Not Found
    </Box>
    <Box sx={{ color: "text.secondary", mb: 4 }}>
      The page you're looking for doesn't exist.
    </Box>
    <Box
      component="a"
      href="/"
      sx={{
        bgcolor: "primary.main",
        color: "black",
        px: 4,
        py: 1.5,
        borderRadius: "24px",
        textDecoration: "none",
        fontWeight: 600,
        "&:hover": {
          bgcolor: "#ffc940",
        },
      }}
    >
      Go Back Home
    </Box>
  </Box>
);

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ScrollToTop />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
