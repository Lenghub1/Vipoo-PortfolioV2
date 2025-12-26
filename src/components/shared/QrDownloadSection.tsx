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

const QrDownloadCard: React.FC = () => {
  const [isQrFull, setIsQrFull] = React.useState(false);
  const qrScale = 1;
  const qrPressedScale = qrScale * 0.95;

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

          height: isQrFull ? "100%" : "auto",
          aspectRatio: isQrFull ? "1 / 1" : "auto",
          overflow: isQrFull ? "hidden" : "visible",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: isQrFull ? "background.default" : "background.paper",
          transition: "background-color 300ms ease, transform 150ms ease",
          "&:hover": {
            backgroundColor: isQrFull
              ? "background.paper"
              : "rgba(255,255,255,0.08)",
          },
          "&:focus-visible": {
            outline: "2px solid rgba(255,255,255,0.5)",
            outlineOffset: 2,
          },
          "&:active": {
            transform: "scale(0.95)",
            // transition: "transform 300ms cubic-bezier(.215,.61,.355,1)",
          },
          "& img": {
            transition: "transform 300ms cubic-bezier(.215,.61,.355,1)",
            transform: `scale(${qrScale})`,
          },
          "&:active img": {
            transform: `scale(${qrPressedScale})`,
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

export default QrDownloadCard;
