import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects.data";

const ProjectsGrid: React.FC = () => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 6 }}>
          I worked on
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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsGrid;
