import React from "react";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects.data";

const ProjectsGrid: React.FC = () => {
  const [titleVisible, setTitleVisible] = React.useState(false);
  const [gridVisible, setGridVisible] = React.useState(false);

  React.useEffect(() => {
    setTitleVisible(false);
    setGridVisible(false);
    if (typeof window === "undefined") {
      setTitleVisible(true);
      setGridVisible(true);
      return;
    }
    const titleTimer = window.setTimeout(() => setTitleVisible(true), 420);
    const gridTimer = window.setTimeout(() => setGridVisible(true), 420);
    return () => {
      window.clearTimeout(titleTimer);
      window.clearTimeout(gridTimer);
    };
  }, []);

  return (
    <Box component="section" id="projects-section" sx={{ mb: "96px" }}>
      <Typography
        variant="h2"
        sx={{
          mb: 6,
          opacity: titleVisible ? 1 : 0,
          filter: titleVisible ? "blur(0px)" : "blur(10px)",
          transform: titleVisible ? "translateY(0)" : "translateY(16px)",
          transition:
            "opacity 600ms ease, filter 600ms ease, transform 600ms ease",
        }}
      >
        I worked on
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
          },
          columnGap: { sm: "24px", md: "32px" },
          rowGap: "72px",
          opacity: gridVisible ? 1 : 0,
          filter: gridVisible ? "blur(0px)" : "blur(12px)",
          transform: gridVisible ? "translateY(0)" : "translateY(24px)",
          transition:
            "opacity 600ms ease, filter 600ms ease, transform 600ms ease",
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsGrid;
