import React from "react";
import { Box, Typography } from "@mui/material";
import DetailLayout, {
  type DetailComponentProps,
} from "../../components/project-detail/DetailLayout";
import TitleWithDesc from "../../components/shared/TitleWithDesc";
import Divider from "../../components/shared/Divider";

const VisitWebsite = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "120px",
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        "&:hover ": {
          cursor: "pointer",
        },
        "&:hover .visit-overlay": {
          opacity: 1,
        },
        "&:hover .visit-image": {
          transform: "translate3d(0, -16px, 0)",
        },
        "@media (prefers-reduced-motion: reduce)": {
          "& .visit-image": {
            transition: "none",
          },
          "&:hover .visit-image": {
            transform: "none",
          },
        },
      }}
    >
      <Box
        className="visit-image"
        component="img"
        src="/projects/eccc/visitwebsite.webp"
        alt="soilder's watching the smoky horizon"
        sx={{
          position: "absolute",
          top: "-170%",
          width: "100%",
          height: "auto",
          objectFit: "cover",
          objectPosition: "center",
          transform: "translate3d(0, 0, 0)",
          transition: "transform 200ms ease",
        }}
      />
      <Box
        className="visit-overlay"
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          bgcolor: "#3F6790",
          mixBlendMode: "lighten",
          opacity: 0,
          transition: "opacity 200ms ease",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          color: "#fff",
        }}
      >
        <Box
          component="img"
          src="/projects/eccc/globe.svg"
          alt="Visit website globe icon"
          sx={{ width: "28px", height: "28px" }}
        />
        <Typography variant="t1" component="span">
          Visit website
        </Typography>
      </Box>
    </Box>
  );
};

const Tldr = () => {
  return (
    <TitleWithDesc
      title="TL;DR"
      description="The Extraordinary Chambers in the Courts of Cambodia (ECCC) website serves as a living historical archive. When I joined Melon Rouge mid-project, the brand identity and visual direction were already finalized. My responsibility was to translate that vision into a functional, interactive web experience that respected the gravity of the content while staying accessible to the public."
    />
  );
};

const Responsibility = () => {
  return (
    <TitleWithDesc
      title="Responsibility"
      description="When I joined the project, the visual direction and conceptual foundation were already in place. My role was to take that vision , originally conceived without a deep understanding of web interaction and make it practical, accessible, and responsive. I designed the UI components, refined the interaction patterns, and structured pages for archival content, documents, and non-linear storytelling. Throughout the process, I collaborated closely with the brand director and development team to ensure the final experience stayed true to the intended tone while remaining easy to navigate and precise in presenting historical information."
    />
  );
};

const Result = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TitleWithDesc
        title="Result"
        description="After many months of user research, gather feedbacks, internal meeting back and forth, user testing, we finally came up with the final product that not only support all the complexity of the business but also modernize and make it personalize tailored to each users."
      />
    </Box>
  );
};

const Eccc: React.FC<DetailComponentProps> = (props) => (
  <DetailLayout
    {...props}
    bannerSrc="/projects/eccc/banner.webp"
    maxWidth="1120px"
  >
    <VisitWebsite />
    <Tldr />
    <Divider />
    <Responsibility />
    <Divider />
    <Result />
  </DetailLayout>
);

export default Eccc;
