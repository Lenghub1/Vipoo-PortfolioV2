import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import { projects } from "../data/projects.data";
import Smartnas from "./details/Smartnas";
import Eccc from "./details/Eccc";
import Filelog from "./details/Filelog";
import Default from "./details/Default";
import type { DetailComponentProps } from "../components/project-detail/DetailLayout";

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

  const relatedProjects = projects.filter((p) => p.id !== id).slice(0, 2);

  const componentMap: Record<string, React.FC<DetailComponentProps>> = {
    smartnas: Smartnas,
    "eccc-website": Eccc,
    filelog: Filelog,
  };

  const DetailComponent = componentMap[project.id] ?? Default;

  return (
    <DetailComponent
      project={project}
      relatedProjects={relatedProjects}
      onBack={() => navigate("/")}
    />
  );
};

export default ProjectDetailPage;
