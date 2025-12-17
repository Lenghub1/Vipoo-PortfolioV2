import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ProjectDetailLayout, {
  type ProjectDetailComponentProps,
} from "../components/project-detail/ProjectDetailLayout";

const ProjectDetailSmartnas: React.FC<ProjectDetailComponentProps> = (
  props
) => (
  <ProjectDetailLayout
    {...props}
    bannerSrc="/projects/smartnas/smartnas-banner.webp"
    maxWidth="1120px"
  >
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="t1" sx={{ mb: "4px" }}>
        Why we decide to do the revamp
      </Typography>
      <Typography variant="b2">
        SmartNas 3.0 started as a modular, flexible app, but years of added
        products, plans, and features caused it to drift from its original
        structure. Inconsistencies grew, navigation became harder, and the lack
        of a modern design system made the experience feel outdated and
        confusing for many users.
      </Typography>
    </Box>

    <Box
      sx={{
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        minHeight: "532px",
        backgroundImage: "url(/projects/smartnas/demo.webp)",
        backgroundSize: "cover",
        backgroundPosition: "start",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          left: { md: "28px" },
          bottom: { md: "28px" },
          maxWidth: 400,
          borderRadius: 3,
          backdropFilter: "blur(8px)",
        }}
      >
        <Button
          sx={{
            width: "fit-content",
            bgcolor: "#FFFFFF",
            color: "#000000",
            borderRadius: "12px",
            px: "16px",
            py: "8px",
            mb: "24px",
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: "24px",
          }}
        >
          View demo
        </Button>
        <Typography variant="b1">
          A homepage designed around what truly matters.
        </Typography>
        <Typography variant="b2">
          puts each user’s essential data front and center, balance, plans,
          benefits, and shortcuts, all personalized, accessible, and easy to
          understand at a glance.
        </Typography>
      </Box>
    </Box>

    <Box>
      <Box
        sx={{
          backgroundImage: "url(/projects/smartnas/iphoneFrame.webp)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      />
      <Box
        sx={{
          backgroundImage: "url(/projects/smartnas/1.webp)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  </ProjectDetailLayout>
);

export default ProjectDetailSmartnas;
