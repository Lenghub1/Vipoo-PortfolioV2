import React from "react";
import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import ProjectCard from "../home/ProjectCard";
import type { Project } from "../../types/project.types";
import { CONTENT_MAX_WIDTH, GLOBAL_PX } from "../../theme/layout";
import QrDownloadCard from "../shared/QrDownloadSection";

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

const DetailLayout: React.FC<DetailLayoutProps> = ({
  project,
  relatedProjects,
  bannerSrc,
  meta,
  isQrcode = false,
  children,
}) => {
  const heroSrc = bannerSrc ?? project.image;
  const metaItems = meta ?? buildDefaultMeta(project);
  const accentColor = project.color ?? "#0B0C0D";
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={heroSrc}
          alt={`${project.title} banner`}
          sx={{
            width: "100%",
            height: 560,
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
            height: "60%",
            pointerEvents: "none",
            background: `linear-gradient(180deg, ${alpha(
              accentColor,
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
          gap: "80px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "32px",
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="b1"
              sx={{
                color: accentColor,
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Introducing
            </Typography>
            <Typography variant="h1" sx={{ mb: "20px" }}>
              {project.title}
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "18px",
                lineHeight: "22px",
              }}
            >
              {project.description}
            </Typography>
          </Box>

          {isQrcode && <QrDownloadCard />}
        </Box>

        {metaItems.length > 0 && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(4, 1fr)",
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
