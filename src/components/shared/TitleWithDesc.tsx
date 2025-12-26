import React from "react";
import { Box, Typography } from "@mui/material";

interface ShareProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

const TitleWithDesc: React.FC<ShareProps> = ({ title, description }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Typography variant="t1">{title}</Typography>
      <Typography variant="b1" sx={{ color: "text.secondary" }}>
        {description}
      </Typography>
    </Box>
  );
};

export default TitleWithDesc;
