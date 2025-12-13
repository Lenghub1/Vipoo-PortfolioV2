import React from "react";
import ProjectDetailTemplate, {
  type ProjectDetailComponentProps,
} from "./ProjectDetailTemplate";

const ProjectDetailFilelog: React.FC<ProjectDetailComponentProps> = (props) => (
  <ProjectDetailTemplate
    {...props}
    maxWidth="1000px"
    bannerSrc="/projects/filelog/filelog-banner.webp"
  />
);

export default ProjectDetailFilelog;
