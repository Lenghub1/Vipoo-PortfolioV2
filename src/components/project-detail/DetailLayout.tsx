import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { alpha } from "@mui/material/styles";
import ProjectCard from "../home/ProjectCard";
import type { Project } from "../../types/project.types";
import {
  CONTENT_MAX_WIDTH,
  GLOBAL_PX,
  SN_DOWNLOAD_P,
} from "../../theme/layout";

export interface DetailComponentProps {
  project: Project;
  relatedProjects: Project[];
  onBack: () => void;
  isQrcode?: boolean;
  allowBack?: boolean;
}

export interface ProjectMetaItem {
  label: string;
  value?: React.ReactNode;
}

interface DetailLayoutProps extends DetailComponentProps {
  children: React.ReactNode;
  bannerSrc?: string;
  maxWidth?: number | string;
  meta?: ProjectMetaItem[];
}

interface DownloadCardProps {
  iconSrc: string;
  label: string;
}

interface DetailSectionProps {
  title: string;
  eyebrow?: string;
  layout?: "stacked" | "split";
  media?: React.ReactNode;
  children: React.ReactNode;
}

const buildDefaultMeta = (project: Project): ProjectMetaItem[] => [
  { label: "Company", value: project.client },
  { label: "Role", value: project.details?.role },
  { label: "Team", value: project.details?.team },
  { label: "Duration", value: project.details?.duration },
];

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

const DetailLayout: React.FC<DetailLayoutProps> = ({
  project,
  relatedProjects,
  onBack,
  allowBack,
  bannerSrc,
  meta,
  isQrcode = false,
  children,
}) => {
  const heroSrc = bannerSrc ?? project.image;
  const metaItems = meta ?? buildDefaultMeta(project);
  const overlayColor = project.color ?? "#0B0C0D";
  const [isQrFull, setIsQrFull] = React.useState(true);
  const qrScale = isQrFull ? 1 : 0.85;
  const qrPressedScale = qrScale * 0.95;

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={heroSrc}
          alt={`${project.title} banner`}
          sx={{
            width: "100%",
            height: { xs: 320, md: 560 },
            objectFit: "cover",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: { xs: "55%", md: "60%" },
            pointerEvents: "none",
            background: `linear-gradient(180deg, ${alpha(
              overlayColor,
              0
            )} 0%, #0B0C0D 100%)`,
            overflow: "hidden",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          bottom: "100px",
          mx: "auto",
          maxWidth: `${CONTENT_MAX_WIDTH}px`,
          py: 5,
          px: `${GLOBAL_PX}px`,
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: "80px" },
        }}
      >
        {allowBack && (
          <Button
            onClick={onBack}
            sx={{
              alignSelf: "flex-start",
              color: "text.secondary",
              "&:hover": { color: "white" },
            }}
          >
            ← Back
          </Button>
        )}

        <Box sx={{ display: "flex", gap: "32px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "2.25rem", md: "3rem" } }}
            >
              {project.title}
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "20px",
                lineHeight: "26px",
              }}
            >
              {project.description}
            </Typography>
          </Box>

          {isQrcode && (
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
                  backgroundColor: isQrFull ? "#000000" : "background.paper",
                  transition:
                    "background-color 300ms ease, transform 150ms ease",
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
                  <Typography
                    variant="xs14"
                    sx={{ width: 80, textAlign: "start" }}
                  >
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
          )}
        </Box>

        {metaItems.length > 0 && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 4,
            }}
          >
            {metaItems.map((item) => (
              <Box key={item.label}>
                <Typography
                  variant="overline"
                  sx={{ color: "text.secondary", mb: 1 }}
                >
                  {item.label}
                </Typography>
                <Typography>{item.value}</Typography>
              </Box>
            ))}
          </Box>
        )}

        {children}

        <Box
          sx={{
            width: "100%",
            py: "50px",
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0 4px, transparent 4px 8px)",
            }}
          />
          <Typography variant="t1" sx={{ color: "text.secondary" }}>
            End
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0 4px, transparent 4px 8px)",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <Typography variant="t1">View other projects</Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 4,
            }}
          >
            {relatedProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const DetailSection: React.FC<DetailSectionProps> = ({
  title,
  eyebrow,
  layout = "stacked",
  media,
  children,
}) => {
  const split = layout === "split" && Boolean(media);

  return (
    <Box>
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{ color: "primary.light", letterSpacing: 2, mb: 1 }}
        >
          {eyebrow}
        </Typography>
      )}

      <Typography variant="h3" sx={{ mb: 2 }}>
        {title}
      </Typography>

      {split ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
            {children}
          </Typography>
          <Box>{media}</Box>
        </Box>
      ) : (
        <>
          <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
            {children}
          </Typography>
          {media && <Box sx={{ mt: 3 }}>{media}</Box>}
        </>
      )}
    </Box>
  );
};

export default DetailLayout;
