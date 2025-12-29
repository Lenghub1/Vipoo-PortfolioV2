import React from "react";
import Box from "@mui/material/Box";

const Divider: React.FC = () => (
  <Box sx={{ width: "100%", py: "50px" }}>
    <Box
      sx={{
        width: "100%",
        height: "1px",
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0 4px, transparent 4px 8px)",
      }}
    />
  </Box>
);

export default Divider;
