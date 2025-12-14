import React from "react";
import ProjectDetailTemplate, {
  type ProjectDetailComponentProps,
} from "./ProjectDetailTemplate";

const ProjectDetailEccc: React.FC<ProjectDetailComponentProps> = (props) => (
  <ProjectDetailTemplate
    {...props}
    maxWidth="1040px"
    bannerSrc="/projects/eccc/eccc-banner.webp"
  />
);

export default ProjectDetailEccc;
