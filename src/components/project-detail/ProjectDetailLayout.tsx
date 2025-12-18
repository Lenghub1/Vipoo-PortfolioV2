import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ProjectCard from "../home/ProjectCard";
import type { Project } from "../../types/project.types";

export interface ProjectDetailComponentProps {
  project: Project;
  relatedProjects: Project[];
  onBack: () => void;
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

const buildDefaultMeta = (project: Project): ProjectMetaItem[] => [
  { label: "Company", value: project.client },
  { label: "Role", value: project.details?.role },
  { label: "Team", value: project.details?.team },
  { label: "Duration", value: project.details?.duration },
];

const ProjectDetailLayout: React.FC<ProjectDetailLayoutProps> = ({
  project,
  relatedProjects,
  onBack,
  allowBack,
  bannerSrc,
  maxWidth = "1040px",
  meta,
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
          width: "100%",
          position: "relative",
          bottom: "100px",
          maxWidth,
          mx: "auto",
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 0 },
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

        <Box>
          <Typography
            variant="h1"
            sx={{ mb: 2, fontSize: { xs: "2.25rem", md: "3rem" } }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 840, lineHeight: 1.8 }}
          >
            {project.description}
          </Typography>
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
                  sx={{ color: "text.secondary", mb: 1, display: "block" }}
                >
                  {item.label}
                </Typography>
                <Typography>{item.value}</Typography>
              </Box>
            ))}
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, md: 6 },
          }}
        >
          {children}
        </Box>

        <Box
          sx={{
            pt: { xs: 4, md: 6 },
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
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

interface ProjectDetailSectionProps {
  title: string;
  eyebrow?: string;
  layout?: "stacked" | "split";
  media?: React.ReactNode;
  children: React.ReactNode;
}

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
          sx={{
            color: "primary.light",
            letterSpacing: 2,
            mb: 1,
            display: "block",
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h3"
        sx={{ mb: 2, fontSize: { xs: "1.5rem", md: "2rem" } }}
      >
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
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", lineHeight: 1.8 }}
          >
            {children}
          </Typography>
          <Box sx={{ width: "100%" }}>{media}</Box>
        </Box>
      ) : (
        <>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", lineHeight: 1.8 }}
          >
            {children}
          </Typography>
          {media && <Box sx={{ mt: 3 }}>{media}</Box>}
        </>
      )}
    </Box>
  );
};

export default ProjectDetailLayout;
