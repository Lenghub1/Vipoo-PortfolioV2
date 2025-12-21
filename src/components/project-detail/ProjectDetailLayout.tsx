import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ProjectCard from "../home/ProjectCard";
import type { Project } from "../../types/project.types";
import {
  CONTENT_MAX_WIDTH,
  GLOBAL_PX,
  SN_DOWNLOAD_P,
} from "../../theme/layout";

export interface ProjectDetailComponentProps {
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

interface ProjectDetailLayoutProps extends ProjectDetailComponentProps {
  children: React.ReactNode;
  bannerSrc?: string;
  maxWidth?: number | string;
  meta?: ProjectMetaItem[];
}

interface StoreDownloadCardProps {
  iconSrc: string;
  label: string;
}

interface ProjectDetailSectionProps {
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

const StoreDownloadCard: React.FC<StoreDownloadCardProps> = ({
  iconSrc,
  label,
}) => (
  <Box
    sx={{
      bgcolor: "background.paper",
      p: `${SN_DOWNLOAD_P}px`,
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
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

const ProjectDetailLayout: React.FC<ProjectDetailLayoutProps> = ({
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

  return (
    <Box sx={{ width: "100%" }}>
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
          position: "relative",
          bottom: "100px",
          mx: "auto",
          maxWidth: `${CONTENT_MAX_WIDTH}px`,
          py: { xs: 6, md: 8 },
          px: `${GLOBAL_PX}px`,
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: 6 },
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

        <Box sx={{ display: "flex", alignItems: "flex-start", gap: "32px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
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
                gap: "12px",
                border: "1px solid rgba(255,255,255,0.07)",
                p: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: "background.paper",
                  p: `${SN_DOWNLOAD_P}px`,
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <img
                  src="/projects/smartnas/qr.svg"
                  alt="QR Code"
                  style={{ width: 80, height: 80 }}
                />
                <Typography variant="xs14" sx={{ width: 80 }}>
                  Scan to download
                </Typography>
              </Box>

              <Box display="flex" flexDirection="column" gap="12px">
                <StoreDownloadCard
                  iconSrc="/projects/smartnas/appstore.svg"
                  label="Open App Store"
                />
                <StoreDownloadCard
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

        <Box sx={{ pt: 6, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <Typography variant="h4" sx={{ mb: 4 }}>
            View other projects
          </Typography>

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

export const ProjectDetailSection: React.FC<ProjectDetailSectionProps> = ({
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

export default ProjectDetailLayout;
