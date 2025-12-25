import React from "react";
import DetailLayout, {
  DetailSection,
  type DetailComponentProps,
} from "../components/project-detail/DetailLayout";

const DetailDefault: React.FC<DetailComponentProps> = (props) => {
  const { project } = props;
  return (
    <DetailLayout {...props} maxWidth="960px">
      {project.details?.overview && (
        <DetailSection eyebrow="Snapshot" title="TL;DR">
          {project.details.overview}
        </DetailSection>
      )}

      {project.details?.challenge && (
        <DetailSection eyebrow="Responsibilities" title="What I owned">
          {project.details.challenge}
        </DetailSection>
      )}

      {project.details?.solution && (
        <DetailSection eyebrow="Solution" title="How we solved it">
          {project.details.solution}
        </DetailSection>
      )}
    </DetailLayout>
  );
};

export default DetailDefault;
