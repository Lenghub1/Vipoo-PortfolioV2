import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { Project } from "../../types/project.types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      component="article"
      onClick={() => {
        if (project.active === false) return;
        navigate(`/project/${project.id}`);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        cursor: project.active === false ? "not-allowed" : "pointer",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: "-12px",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.08)",
            pointerEvents: "none",
          },
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            display: "block",
            objectFit: "cover",
            transition: "transform 0.4s cubic-bezier(.215,.61,.355,1)",
            transform:
              project.active === false || !isHovered
                ? "scale(1)"
                : "scale(1.04)",
            transformOrigin: "center",
          }}
          className="project-card__image"
          loading="lazy"
        />
      </Box>
      <Box sx={{ mt: "16px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            mb: "8px",
            flexWrap: "wrap",
            color: "text.secondary",
          }}
        >
          <Typography variant="caption">{project.client}</Typography>
          <Typography variant="caption" component="span">
            ·
          </Typography>
          <Typography variant="caption">{project.date}</Typography>
          {project.badge && (
            <>
              <Typography variant="caption" component="span">
                ·
              </Typography>
              <Box
                component="span"
                sx={{
                  bgcolor: "#93d4ff34",
                  color: "primary.main",
                  fontWeight: 600,
                  fontSize: "12px",
                  fontWidth: "SemiBold",
                  lineHeight: "19px",
                  height: "19px",
                  px: "6px",
                  borderRadius: "4px",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {project.badge}
              </Box>
            </>
          )}
        </Box>
        <Typography
          component="h3"
          sx={{
            fontSize: "23px",
            lineHeight: "32px",
            fontWeight: 600,

            mb: "8px",
            transition: "transform 0.4s cubic-bezier(.215,.61,.355,1)",
            opacity: project.active === false || !isHovered ? "75%" : "100%",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          sx={{ fontSize: "14px", lineHeight: "21px", color: "text.secondary" }}
        >
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;
