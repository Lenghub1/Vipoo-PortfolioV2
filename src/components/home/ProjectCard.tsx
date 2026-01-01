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
  const isInteractive = project.active !== false;
  const isCardHovered = isInteractive && isHovered;
  const baseTextColor = isInteractive ? "text.primary" : "text.secondary";
  const [isPressed, setIsPressed] = React.useState(false);
  const hasUnlockSoonBadge = project.badge?.toLowerCase() === "unlock soon";
  const shouldShowDate = Boolean(project.date) && !hasUnlockSoonBadge;

  return (
    <Box
      component="article"
      onClick={() => {
        if (!isInteractive) return;
        navigate(`/project/${project.id}`);
      }}
      onMouseEnter={() => {
        if (!isInteractive) return;
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => {
        if (!isInteractive) return;
        setIsPressed(true);
      }}
      onMouseUp={() => setIsPressed(false)}
      sx={{
        cursor: isInteractive ? "pointer" : "not-allowed",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Box sx={{ borderRadius: "inherit", overflow: "hidden" }}>
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: "100%",
              display: "block",
              objectFit: "cover",
              transition: "transform 150ms ease",
              opacity: hasUnlockSoonBadge ? 0.5 : 1,
              transform:
                isPressed && isInteractive
                  ? "scale(0.97)"
                  : isCardHovered
                  ? "scale(1.04)"
                  : "scale(1)",
              transformOrigin: "center",
            }}
            className="project-card__image"
            loading="lazy"
          />
        </Box>
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
            transition: "color 150ms ease",
          }}
        >
          <Typography variant="caption">{project.client}</Typography>
          {shouldShowDate && (
            <>
              <Typography variant="caption" component="span">
                ·
              </Typography>
              <Typography variant="caption">{project.date}</Typography>
            </>
          )}
          {project.badge && (
            <>
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
            fontWeight: isCardHovered ? 500 : 400,
            mb: "8px",
            color: baseTextColor,
            transition:
              " transform 0.3s cubic-bezier(.215,.61,.355,1), font-weight 0.3s ease",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "21px",
            color: "text.secondary",
            transition: "color 150ms ease",
          }}
        >
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;
