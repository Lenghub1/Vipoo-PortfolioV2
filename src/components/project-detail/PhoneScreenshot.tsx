import React from "react";
import { Box } from "@mui/material";

interface PhoneScreenshotProps {
  screenSrc: string;
  alt: string;
  frameSrc?: string;
}

const DEFAULT_FRAME = "/projects/smartnas/iphoneFrame.webp";

const PhoneScreenshot: React.FC<PhoneScreenshotProps> = ({
  screenSrc,
  frameSrc = DEFAULT_FRAME,
  alt,
}) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      maxWidth: 320,
      mx: "auto",
    }}
  >
    <Box
      component="img"
      src={screenSrc}
      alt={alt}
      sx={{
        position: "absolute",
        top: "6%",
        left: "7%",
        right: "7%",
        bottom: "7%",
        width: "86%",
        height: "87%",
        objectFit: "cover",
        borderRadius: 3,
      }}
    />

    <Box
      component="img"
      src={frameSrc}
      alt="Phone frame"
      sx={{ width: "100%", display: "block", pointerEvents: "none" }}
    />
  </Box>
);

export default PhoneScreenshot;
