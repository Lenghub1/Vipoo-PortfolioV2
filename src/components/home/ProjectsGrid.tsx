import React from "react";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects.data";

const ProjectsGrid: React.FC = () => {
  return (
    <Box component="section" id="projects-section" sx={{ mb: "96px" }}>
      <Typography variant="h2" sx={{ mb: 6 }}>
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
