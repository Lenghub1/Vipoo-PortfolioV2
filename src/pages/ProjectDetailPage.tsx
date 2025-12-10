import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";
import { projects } from "../data/projects.data";
import ProjectCard from "../components/home/ProjectCard";

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h3">Project not found</Typography>
        <Button onClick={() => navigate("/")} sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Back button */}
        <Button
          onClick={() => navigate("/")}
          sx={{
            mb: 4,
            color: "text.secondary",
            "&:hover": { color: "white" },
          }}
        >
          ← Back
        </Button>

        {/* Hero image */}
        <Box
          sx={{
            height: { xs: 300, md: 500 },
            borderRadius: 2,
            overflow: "hidden",
            mb: 6,
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Title & Description */}
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

        {/* Project meta info */}
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

        {/* TL;DR */}
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

        {/* Responsibility */}
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

        {/* Challenge */}
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
            {projects
              .filter((p) => p.id !== id)
              .slice(0, 2)
              .map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetailPage;
