import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import { projects } from "../data/projects.data";
import ProjectDetailSmartnas from "./ProjectDetailSmartnas";
import ProjectDetailEccc from "./ProjectDetailEccc";
import ProjectDetailFilelog from "./ProjectDetailFilelog";
import ProjectDetailDefault from "./ProjectDetailDefault";
import type { ProjectDetailComponentProps } from "./ProjectDetailTemplate";

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

  const relatedProjects = projects
    .filter((p) => p.id !== id)
    .slice(0, 2);

  const componentMap: Record<string, React.FC<ProjectDetailComponentProps>> = {
    smartnas: ProjectDetailSmartnas,
    "eccc-website": ProjectDetailEccc,
    filelog: ProjectDetailFilelog,
  };

  const DetailComponent =
    componentMap[project.id] ?? ProjectDetailDefault;

  return (
    <DetailComponent
      project={project}
      relatedProjects={relatedProjects}
      onBack={() => navigate("/")}
    />
  );
};

export default ProjectDetailPage;
