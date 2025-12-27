import React from "react";
import { Box, Typography } from "@mui/material";
import { other } from "../../data/eccc.data";
import DetailLayout, {
  type DetailComponentProps,
} from "../../components/project-detail/DetailLayout";
import TitleWithDesc from "../../components/shared/TitleWithDesc";
import Divider from "../../components/shared/Divider";
import { data3y8m20d, dataJustice, dataKhmerrough } from "../../data/eccc.data";

interface EcccMediaSectionProps {
  title: string;
  subtitle: string;
  videoSrc: string;
  images: string[];
}

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

const EcccMediaSection: React.FC<EcccMediaSectionProps> = ({
  title,
  subtitle,
  videoSrc,
  images,
}) => {
  const rowRef = React.useRef<HTMLDivElement | null>(null);
  const marqueeImages = React.useMemo(() => [...images, ...images], [images]);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    let lastScrollY = window.scrollY;
    let currentOffset = 0;
    let rafId: number | null = null;

    const updateTransform = () => {
      if (rowRef.current) {
        rowRef.current.style.transform = `translateX(${currentOffset}px)`;
      }
    };

    const handleScroll = () => {
      const nextScrollY = window.scrollY;
      const delta = nextScrollY - lastScrollY;
      if (delta !== 0) {
        const direction = delta > 0 ? -1 : 1;
        currentOffset += direction * Math.min(Math.abs(delta), 80) * 0.35;
        rafId = window.requestAnimationFrame(updateTransform);
        lastScrollY = nextScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        maxHeight: "1100px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: { xs: "420px", md: "900px" },
          mx: "auto",
        }}
      >
        <Box
          sx={{
            mb: "24px",
            position: "relative",
            width: "100%",
          }}
        >
          <Box
            component="img"
            src="/projects/eccc/macbook.webp"
            alt="Macbook frame"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "16px",
              zIndex: 1,
            }}
          />
          <Box
            component="video"
            src={videoSrc}
            muted
            autoPlay
            loop
            playsInline
            sx={{
              // zIndex: -1,
              position: "absolute",
              top: "46.3%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "75.5%",
              objectFit: "cover",
              display: "block",
              borderRadius: "8px",
              // border: "1px solid #ffffff",
            }}
          />
        </Box>

        <Typography variant="t2" sx={{ mb: "4px" }}>
          {title}
        </Typography>
        <Typography variant="t3">{subtitle}</Typography>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              width: { xs: "40px", md: "80px" },
              zIndex: 1,
              pointerEvents: "none",
            },
            "&::before": {
              left: 0,
              width: "240px",
              background:
                "linear-gradient(90deg, rgba(11,12,13,1) 0%, rgba(11,12,13,0) 100%)",
            },
            "&::after": {
              right: 0,
              width: "240px",
              background:
                "linear-gradient(270deg, rgba(11,12,13,1) 0%, rgba(11,12,13,0) 100%)",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-50%",
              left: "0%",
              borderRadius: "50%",
              zIndex: 1,
              width: "110%",
              height: "100px",
              backgroundColor: "background.default",
              filter: "blur(15px)",
            }}
          />
          <Box
            ref={rowRef}
            sx={{
              display: "flex",
              gap: "8px",
              willChange: "transform",
            }}
          >
            {marqueeImages.map((src, index) => (
              <Box
                key={`${src}-${index}`}
                component="img"
                src={src}
                alt="Historical reference from ECCC archives"
                sx={{
                  height: "98px",
                  objectFit: "cover",
                  borderRadius: "6px",
                  flexShrink: 0,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const mediaSections = [
  {
    title: "Who were the Khmer Rouge?",
    subtitle: "What's making them so infamous?",
    media: dataKhmerrough,
  },
  {
    title: "3 Years, 8 Months, 20 Days",
    subtitle: "The period of the Khmer Rouge regime",
    media: data3y8m20d,
  },
  {
    title: "Pursuit of Justice",
    subtitle: "Documenting the tribunal’s mission",
    media: dataJustice,
  },
];

const Result = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TitleWithDesc
        title="Result"
        description="After many months of user research, gather feedbacks, internal meeting back and forth, user testing, we finally came up with the final product that not only support all the complexity of the business but also modernize and make it personalize tailored to each users."
      />
      {mediaSections.map((section) => (
        <EcccMediaSection
          key={section.title}
          title={section.title}
          subtitle={section.subtitle}
          videoSrc={section.media.videoSrc}
          images={section.media.imageSrc}
        />
      ))}
    </Box>
  );
};

const OtherScreen = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "36px" }}>
      <Typography variant="t1">Other screens</Typography>
      <Box
        sx={{
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          overflow: "hidden",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: { xs: "40px", md: "80px" },
            zIndex: 1,
            pointerEvents: "none",
          },
          // "&::before": {
          //   left: 0,
          //   background:
          //     "linear-gradient(90deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 100%)",
          // },
          // "&::after": {
          //   right: 0,
          //   background:
          //     "linear-gradient(270deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 100%)",
          // },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            alignItems: "flex-start",
            animation: "scrollReviews 32s linear infinite",
            willChange: "transform",
            "@keyframes scrollReviews": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {other.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "400px",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: "300px",
                  borderRadius: "2px",
                  mb: "10px",
                  textAlign: "center",
                }}
              />
              <Typography variant="xs14">{item.title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
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
    <OtherScreen />
    <Divider />
    <TitleWithDesc
      title="Closing Thought"
      description="Working on this project was a profound experience that challenged me to balance sensitivity with functionality. The ECCC website is more than just a digital platform; it's a crucial tool for education and remembrance. I'm proud to have contributed to a project that helps preserve history and promote justice, ensuring that the stories of those affected by the Khmer Rouge regime are accessible to future generations."
    />
  </DetailLayout>
);

export default Eccc;
