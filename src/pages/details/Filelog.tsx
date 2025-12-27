import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DetailLayout, {
  type DetailComponentProps,
} from "../../components/project-detail/DetailLayout";
import TitleWithDesc from "../../components/shared/TitleWithDesc";
import Divider from "../../components/shared/Divider";

const Tldr = () => {
  return (
    <TitleWithDesc
      title="TL;DR"
      description="Filelog was a product I worked on during my internship at the Ministry of Economy and Finance, created to solve internal productivity challenges caused by manual reporting. Staff were managing large volumes of documents through a mix of Google Sheets and Drive, making tracking slow and inefficient. Filelog digitizes this entire workflow, allowing users to create, send, sign, and track reports in one place and is designed to scale for use across multiple departments."
    />
  );
};

const Challenges = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Typography variant="t1">Challenges</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "32px",
          height: "fit-content",
        }}
      >
        <Typography
          variant="b1"
          sx={{
            color: "text.secondary",
            width: { xs: "100%", md: "calc(50% - (32px/2))" },
            height: "fit-content",
          }}
        >
          When I joined the Ministry of Economy and Finance as an intern, my
          first few weeks were spent assisting with small web development tasks.
          However, my supervisor soon asked me to explore ways to improve
          internal workflow efficiency. It didn’t take long to notice a major
          issue: the approval process for documents was extremely complex and
          difficult to manage.
          <br />
          <br /> Working in a higher office meant that a large volume of
          documents, both physical and digital, needed to pass through my boss
          for review. His assistant was responsible for tracking every file: who
          submitted it, from which department, when it arrived, and where it
          needed to go next after approval or rejection. Their existing system
          relied on a mix of scanning physical documents into Google Drive,
          storing originals in folders, and logging everything manually in
          Google Sheets. Some submissions also came in as Word files, creating
          even more inconsistency. <br />
          <br />
          This fragmented workflow made tracking documents slow, error prone,
          and overwhelming. Seeing this challenge firsthand led me to propose an
          all in one digital file system that would centralize storage,
          approvals, and tracking into a single streamlined platform.
        </Typography>
        <Box
          component="img"
          src="/projects/filelog/challenge.webp"
          alt="Challenges in the current workflow"
          sx={{
            width: { xs: "100%", md: "calc(50% - (32px/2))" },
            height: { xs: "40vw", md: "auto" },
            borderRadius: "12px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
};

const Components = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const componentImageSrc = isMdUp
    ? "/projects/filelog/component.webp"
    : "/projects/filelog/component-xs.webp";

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography variant="t1">Components</Typography>
      <Box
        component="img"
        src={componentImageSrc}
        alt="Components of Filelog"
        sx={{
          width: "auto",
          height: "auto",
          borderRadius: "12px",
          objectFit: "cover",
          display: "block",
        }}
      />
    </Box>
  );
};

const Breakpoints = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const componentImageSrc = isMdUp
    ? "/projects/filelog/screens.webp"
    : "/projects/filelog/screens-xs.webp";

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography variant="t1">Breakpoints</Typography>
      <Box
        component="img"
        src={componentImageSrc}
        alt="Components of Filelog"
        sx={{
          width: "auto",
          height: "auto",
          borderRadius: "12px",
          objectFit: "cover",
          display: "block",
        }}
      />
    </Box>
  );
};

const Final = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography variant="t1">Breakpoints</Typography>
      <Box
        component="img"
        src="/projects/filelog/final.webp"
        alt="Components of Filelog"
        sx={{
          width: "auto",
          height: "auto",
          borderRadius: "12px",
          objectFit: "cover",
          display: "block",
        }}
      />
      <Typography
        variant="b1"
        sx={{
          color: "text.secondary",
          width: "100%",
          height: "fit-content",
        }}
      >
        Although my six-month internship concluded before the product could be
        developed into a full application, I brought the project through its
        critical research and conceptual phases. By the time I left, I had
        established a solid foundation and comprehensive blueprint for the next
        intern to continue building upon.
      </Typography>
    </Box>
  );
};

const Filelog: React.FC<DetailComponentProps> = (props) => (
  <DetailLayout
    {...props}
    bannerSrc="/projects/filelog/banner.webp"
    maxWidth="1120px"
  >
    <Tldr />
    <Divider />
    <Challenges />
    <Divider />
    <Components />
    <Breakpoints />
    <Final />
    <Divider />
    <TitleWithDesc
      title="Closing Thought"
      description="Unfortunately, due to the limited duration of my internship, I was unable to see Filelog through to full development and deployment. However, I am proud of the foundational work I accomplished in researching and designing the product. The experience taught me valuable lessons about identifying workflow inefficiencies and crafting user-centric digital solutions. I hope that future teams can build upon my initial efforts to bring Filelog to life and enhance productivity within the Ministry."
    />
  </DetailLayout>
);

export default Filelog;
