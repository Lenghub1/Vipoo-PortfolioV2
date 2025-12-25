import React from "react";
import { Box, Typography } from "@mui/material";
import { SN_DOWNLOAD_P } from "../../theme/layout";

interface DownloadCardProps {
  iconSrc: string;
  label: string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ iconSrc, label }) => (
  <Box
    component="button"
    type="button"
    sx={{
      bgcolor: "background.paper",
      height: "100%",
      p: `${SN_DOWNLOAD_P}px`,
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      cursor: "pointer",
      transition: "background-color 200ms ease, transform 150ms ease",
      "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
      "&:focus-visible": {
        outline: "2px solid rgba(255,255,255,0.4)",
        outlineOffset: 2,
      },
      "&:active": {
        transform: "scale(0.97)",
      },
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Box component="img" src={iconSrc} alt={label} sx={{ width: 16 }} />
      <Box
        component="img"
        src="/global/arrow_up_right.svg"
        alt="External link"
        sx={{ width: 10, height: 10 }}
      />
    </Box>

    <Typography variant="xs14" sx={{ whiteSpace: "nowrap" }}>
      {label}
    </Typography>
  </Box>
);

const QrDownloadSection: React.FC = () => {
  const [isQrFull, setIsQrFull] = React.useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        height: "156px",
        gap: "12px",
      }}
    >
      <Box
        component="button"
        type="button"
        onClick={() => setIsQrFull((prev) => !prev)}
        aria-pressed={isQrFull}
        sx={{
          p: isQrFull ? 0 : `${SN_DOWNLOAD_P}px`,
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "12px",
          width: isQrFull ? 156 : "auto",
          minWidth: 104,
          height: isQrFull ? 156 : "auto",
          aspectRatio: isQrFull ? "1 / 1" : "auto",
          overflow: "hidden",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: isQrFull ? 0 : 1,
          backgroundColor: isQrFull
            ? "rgba(255,255,255,0.04)"
            : "background.paper",
          transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            backgroundColor: isQrFull
              ? "rgba(255,255,255,0.12)"
              : "rgba(255,255,255,0.08)",
          },
          "&:focus-visible": {
            outline: "2px solid rgba(255,255,255,0.5)",
            outlineOffset: 2,
          },
          "&:active": {
            transform: "scale(0.95)",
          },
        }}
      >
        <Box
          component="img"
          src="/projects/smartnas/qr.svg"
          alt="SmartNas download QR"
          sx={{
            width: isQrFull ? "100%" : "auto",
            height: isQrFull ? "100%" : "auto",
            objectFit: isQrFull ? "cover" : "contain",
            transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        {!isQrFull && (
          <Typography variant="xs14" sx={{ width: 80, textAlign: "start" }}>
            Scan to download
          </Typography>
        )}
      </Box>

      <Box display="flex" flexDirection="column" gap="12px">
        <DownloadCard
          iconSrc="/projects/smartnas/appstore.svg"
          label="Open App Store"
        />
        <DownloadCard
          iconSrc="/projects/smartnas/playstore.svg"
          label="Open Play Store"
        />
      </Box>
    </Box>
  );
};

export default QrDownloadSection;
