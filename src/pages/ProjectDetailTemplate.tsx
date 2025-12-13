import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ProjectCard from "../components/home/ProjectCard";
import type { Project } from "../types/project.types";

export interface ProjectDetailComponentProps {
  project: Project;
  onBack: () => void;
  relatedProjects: Project[];
}

interface ProjectDetailTemplateProps extends ProjectDetailComponentProps {
  maxWidth: number | string;
  bannerSrc?: string;
}

const ProjectDetailTemplate: React.FC<ProjectDetailTemplateProps> = ({
  project,
  onBack,
  relatedProjects,
  maxWidth,
  bannerSrc,
}) => {
  const heroSrc = bannerSrc ?? project.image;

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        component="img"
        src={heroSrc}
        alt={`${project.title} banner`}
        sx={{
          width: "100%",
          height: 632,
          objectFit: "cover",
          display: "block",
        }}
      />
      <Box
        sx={{
          width: "100%",
          maxWidth,
          mx: "auto",
          py: 8,
          px: { xs: 2, md: 0 },
        }}
      >
        <Button
          onClick={onBack}
          sx={{
            mb: 4,
            color: "text.secondary",
            "&:hover": { color: "white" },
          }}
        >
          ← Back
        </Button>

        <Typography
          variant="h1"
          sx={{ mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}
        >
          {project.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 6, color: "text.secondary", maxWidth: 800 }}
        >
          {project.description}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
            mb: 8,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              Company
            </Typography>
            <Typography>{project.client}</Typography>
          </Box>

          <Box>
            <Typography
              variant="overline"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              Role
            </Typography>
            <Typography>{project.details?.role}</Typography>
          </Box>

          <Box>
            <Typography
              variant="overline"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              Team
            </Typography>
            <Typography>{project.details?.team}</Typography>
          </Box>

          <Box>
            <Typography
              variant="overline"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              Duration
            </Typography>
            <Typography>{project.details?.duration}</Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            TL;DR
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", lineHeight: 1.8 }}
          >
            {project.details?.overview}
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Responsibility
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", lineHeight: 1.8 }}
          >
            {project.details?.challenge}
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Challenge
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", lineHeight: 1.8 }}
          >
            {project.details?.solution}
          </Typography>
        </Box>

        <Box sx={{ pt: 6, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <Typography variant="h4" sx={{ mb: 4 }}>
            View other projects
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
              },
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

export default ProjectDetailTemplate;
