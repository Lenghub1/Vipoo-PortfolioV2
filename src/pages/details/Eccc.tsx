import React from "react";
import { Box, Typography } from "@mui/material";
import DetailLayout, {
  DetailSection,
  type DetailComponentProps,
} from "../../components/project-detail/DetailLayout";

const Eccc: React.FC<DetailComponentProps> = (props) => (
  <DetailLayout
    {...props}
    maxWidth="1100px"
    bannerSrc="/projects/eccc/banner.webp"
  >
    <DetailSection
      eyebrow="Information architecture"
      title="From archives to living history"
    >
      We reorganized 18 years of documentation into a guided system that starts
      with 'What is the ECCC?' and funnels visitors into judgments, exhibits,
      and press releases. Every collection page uses a dual-column layout so
      researchers can filter by case, year, and chamber without losing track of
      the content summary.
    </DetailSection>

    <DetailSection
      eyebrow="Bilingual design"
      title="Khmer and English with synchronized URLs"
      layout="split"
      media={
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          {[
            "/projects/eccc/1.webp",
            "/projects/eccc/2.webp",
            "/projects/eccc/3.webp",
          ].map((src) => (
            <Box
              key={src}
              component="img"
              src={src}
              alt="ECCC bilingual preview"
              sx={{
                width: "100%",
                borderRadius: 3,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          ))}
        </Box>
      }
    >
      Content authors can flip languages without duplicating pages. We added
      mirrored typographic scales, Khmer-specific line height, and a shared slug
      generator so URLs stay consistent for press teams and international
      partners.
    </DetailSection>

    <DetailSection
      eyebrow="Engagement"
      title="Visitor planning and outreach"
      layout="split"
      media={
        <Box
          component="img"
          src="/projects/eccc/visitwebsite.webp"
          alt="Visit website"
          sx={{
            width: "100%",
            borderRadius: 3,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />
      }
    >
      Survivors and students can now book guided tours with a single form that
      routes requests to the outreach unit. The same module powers event signups
      and newsletter preferences, so the communications team only manages one
      workflow.
      <Typography sx={{ mt: 2, color: "text.secondary" }}>
        Accessibility was validated against WCAG AA, covering contrast, focus
        states, and reduced-motion fallbacks for hero imagery.
      </Typography>
    </DetailSection>
  </DetailLayout>
);

export default Eccc;
