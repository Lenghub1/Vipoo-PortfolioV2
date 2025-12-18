import React from "react";
import ProjectDetailLayout, {
  ProjectDetailSection,
  type ProjectDetailComponentProps,
} from "../components/project-detail/ProjectDetailLayout";

const ProjectDetailDefault: React.FC<ProjectDetailComponentProps> = (props) => {
  const { project } = props;
  return (
    <ProjectDetailLayout {...props} maxWidth="960px">
      {project.details?.overview && (
        <ProjectDetailSection eyebrow="Snapshot" title="TL;DR">
          {project.details.overview}
        </ProjectDetailSection>
      )}

      {project.details?.challenge && (
        <ProjectDetailSection eyebrow="Responsibilities" title="What I owned">
          {project.details.challenge}
        </ProjectDetailSection>
      )}

      {project.details?.solution && (
        <ProjectDetailSection eyebrow="Solution" title="How we solved it">
          {project.details.solution}
        </ProjectDetailSection>
      )}
    </ProjectDetailLayout>
  );
};

export default ProjectDetailDefault;
