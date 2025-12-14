import React from "react";
import ProjectDetailTemplate, {
  type ProjectDetailComponentProps,
} from "./ProjectDetailTemplate";

const ProjectDetailDefault: React.FC<ProjectDetailComponentProps> = (props) => (
  <ProjectDetailTemplate {...props} maxWidth="938px" />
);

export default ProjectDetailDefault;
