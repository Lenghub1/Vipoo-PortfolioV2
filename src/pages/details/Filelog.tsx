import React from "react";
import { Box } from "@mui/material";
import DetailLayout, {
  DetailSection,
  type DetailComponentProps,
} from "../../components/project-detail/DetailLayout";

const Filelog: React.FC<DetailComponentProps> = (props) => (
  <DetailLayout
    {...props}
    maxWidth="1050px"
    bannerSrc="/projects/filelog/banner.webp"
  >
    <DetailSection
      eyebrow="Problem framing"
      title="Paper-first approvals with zero traceability"
    >
      Ministries were circulating physical folders with hand-written signatures.
      No one could tell where a file stalled or who touched it last. Filelog
      digitized the entire workflow and gave administrators the ability to build
      routing rules without developer support.
    </DetailSection>

    <DetailSection
      eyebrow="Workflow studio"
      title="Branching rules without code"
      layout="split"
      media={
        <Box
          component="img"
          src="/projects/filelog/component.webp"
          alt="Workflow studio"
          sx={{
            width: "100%",
            borderRadius: 3,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />
      }
    >
      Filelog uses Lego-like steps (Review, Approve, Archive, Escalate) that can
      be rearranged. The studio previews SLA breaches and highlights bottlenecks
      so the project owners can simulate before publishing.
    </DetailSection>

    <DetailSection
      eyebrow="Collaboration"
      title="Secure sharing and compliance"
      layout="split"
      media={
        <Box
          component="img"
          src="/projects/filelog/screens.webp"
          alt="Collaboration module"
          sx={{
            width: "100%",
            borderRadius: 3,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />
      }
    >
      We built granular permissions with audit trails, so departments can invite
      auditors for a specific case or time period. Files inherit encryption keys
      per agency, and exports require MFA, which satisfied the national archive
      board.
    </DetailSection>
  </DetailLayout>
);

export default Filelog;
