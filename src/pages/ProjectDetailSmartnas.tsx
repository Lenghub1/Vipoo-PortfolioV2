import React from "react";
import ProjectDetailTemplate, {
  type ProjectDetailComponentProps,
} from "./ProjectDetailTemplate";

const ProjectDetailSmartnas: React.FC<ProjectDetailComponentProps> = (
  props
) => (
  <ProjectDetailTemplate
    {...props}
    maxWidth="1100px"
    bannerSrc="/projects/smartnas/smartnas-banner.webp"
  />
);

export default ProjectDetailSmartnas;
