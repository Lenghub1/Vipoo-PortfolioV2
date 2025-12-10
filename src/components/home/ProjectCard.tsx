import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { Project } from "../../types/project.types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/project/${project.id}`)}
      sx={{
        bgcolor: project.color,
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
        },
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={project.image}
        alt={project.title}
        sx={{
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 1,
            flexWrap: "wrap",
          }}
        >
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {project.client}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            · {project.date}
          </Typography>
          {project.badge && (
            <Chip
              label={project.badge}
              size="small"
              sx={{
                bgcolor: "primary.main",
                color: "black",
                fontWeight: 600,
                fontSize: "0.7rem",
                height: "20px",
              }}
            />
          )}
        </Box>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
