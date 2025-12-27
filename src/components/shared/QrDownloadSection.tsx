import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { SN_DOWNLOAD_P } from "../../theme/layout";
import { motion } from "framer-motion";

interface DownloadCardProps {
  iconSrc: string;
  label: string;
}
const MobileStoreButton: React.FC<DownloadCardProps> = ({ iconSrc, label }) => (
  <Box
    component="button"
    type="button"
    width="100%"
    sx={{
      justifyContent: "center",
      width: "100%",
      height: 41,

      borderRadius: "12px",

      display: "flex",
      alignItems: "center",
      gap: "12px",

      cursor: "pointer",
      "&:active": { transform: "scale(0.98)" },
    }}
  >
    <Box
      component="img"
      src={iconSrc}
      alt={label}
      sx={{ width: 22, filter: "brightness(0)" }}
    />
    <Typography variant="xs14" fontWeight={500} color="black">
      {label}
    </Typography>
  </Box>
);
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        height: "156px",
        gap: "12px",
      }}
    >
      {!isMobile && (
        <>
          <Box
            component={motion.button}
            layout
            type="button"
            onClick={() => setIsQrFull((p) => !p)}
            whileTap={{ scale: 0.97 }}
            aria-pressed={isQrFull}
            transition={{
              layout: {
                duration: 0.3,
                ease: [0.215, 0.61, 0.355, 1],
              },
            }}
            sx={{
              p: isQrFull ? 0 : `${SN_DOWNLOAD_P}px`,
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 4,

              height: isQrFull ? "100%" : "auto",
              aspectRatio: isQrFull ? "1 / 1" : "auto",
              overflow: "hidden",
              cursor: "pointer",

              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",

              backgroundColor: isQrFull
                ? "background.default"
                : "background.paper",
              transition: "background-color 300ms ease",

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
                transform: "scale(0.97)",
              },
            }}
          >
            <Box
              component={motion.img}
              layout
              src="/projects/smartnas/qr.svg"
              alt="SmartNas download QR"
              initial={false}
              transition={{
                duration: 0.3,
                ease: [0.215, 0.61, 0.355, 1],
              }}
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
        </>
      )}

      {isMobile && (
        <Box
          display="flex"
          flexDirection="column"
          gap="12px"
          width="100%"
          justifyContent="center"
        >
          <MobileStoreButton
            iconSrc="/projects/smartnas/appstore.svg"
            label="Download on the App Store"
          />
          <MobileStoreButton
            iconSrc="/projects/smartnas/playstore.svg"
            label="Download on the App Store"
          />
        </Box>
      )}
    </Box>
  );
};

export default QrDownloadCard;
