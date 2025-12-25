import React from "react";
import { Box, Typography } from "@mui/material";
import { review } from "../../data/smartnas.data";
import { showcaseData } from "../../data/smartnas.data";
import DetailLayout, {
  type DetailComponentProps,
} from "../../components/project-detail/DetailLayout";
import DashedFadeDivider from "../../components/dash/DashedFadeDivider";
import { Button } from "@mui/material";
import { CONTENT_MAX_WIDTH } from "../../theme/layout";

export const RevampReasonSection = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
      maxWidth: CONTENT_MAX_WIDTH,
    }}
  >
    <Typography variant="t1" sx={{ mb: "4px" }}>
      Why we decide to do the revamp
    </Typography>
    <Typography variant="b2">
      SmartNas 3.0 started as a modular, flexible app, but years of added
      products, plans, and features caused it to drift from its original
      structure. Inconsistencies grew, navigation became harder, and the lack of
      a modern design system made the experience feel outdated and confusing for
      many users.
    </Typography>
  </Box>
);

export const DemoSection = () => (
  <Box
    sx={{
      position: "relative",
      borderRadius: "12px",
      overflow: "hidden",
      minHeight: "532px",
      backgroundImage: "url(/projects/smartnas/demo.webp)",
      backgroundSize: "cover",
      backgroundPosition: "start",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        left: { md: "28px" },
        bottom: { md: "28px" },
        maxWidth: 400,
        borderRadius: 3,
        backdropFilter: "blur(8px)",
      }}
    >
      <Button
        sx={{
          width: "fit-content",
          bgcolor: "#FFFFFF",
          color: "#000000",
          borderRadius: "12px",
          px: "16px",
          py: "8px",
          mb: "24px",
          fontWeight: 600,
          fontSize: "15px",
          lineHeight: "24px",
        }}
      >
        View demo
      </Button>
      <Typography variant="b1">
        A homepage designed around what truly matters.
      </Typography>
      <Typography variant="b2">
        puts each user's essential data front and center, balance, plans,
        benefits, and shortcuts, all personalized, accessible, and easy to
        understand at a glance.
      </Typography>
    </Box>
  </Box>
);

export const IPhoneFrameSection = () => (
  <Box>
    <Box
      sx={{
        backgroundImage: "url(/projects/smartnas/iphoneFrame.webp)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    />
    <Box
      sx={{
        backgroundImage: "url(/projects/smartnas/1.webp)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    />
  </Box>
);

export const CustomerTestimonialCard = () => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      maxWidth: "1120px",
      mx: "auto",
      overflow: "hidden",
      borderRadius: "16px",
      background: "linear-gradient(96.72deg, #0F0D0D 0%, #210C0C 100%)",
    }}
  >
    <Box
      sx={{
        position: "relative",
        zIndex: 10,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 4, md: 6 },
        p: "28px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "322px",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="t1" sx={{ lineHeight: "36px" }}>
          I open SmartNas every day, but it still shows me things I never use.
          Why doesn't the app focus on what matters to me?
        </Typography>
        <Typography
          sx={{
            color: "#9ca3af",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          — Customer, 2023
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: -20,
          right: 100,
          scale: 1.2,
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <Box
          component="img"
          src="/projects/smartnas/review.webp"
          alt="SmartNas app interface with user"
          sx={{
            width: "100%",
            maxWidth: "761px",
            height: "322px",
            objectFit: "contain",
            display: "block",
          }}
        />
      </Box>
    </Box>
  </Box>
);

export const UserReviewsCarousel = () => {
  const duplicatedReviews = [
    ...review,
    ...review,
    ...review,
    ...review,
    ...review,
  ];

  return (
    <Box
      sx={{
        width: "99vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        py: 4,
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
          background:
            "linear-gradient(90deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 100%)",
        },
        "&::after": {
          right: 0,
          background:
            "linear-gradient(270deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 100%)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          alignItems: "flex-start",
          animation: "scrollReviews 40s linear infinite",
          willChange: "transform",
          "&:hover": { animationPlayState: "paused" },
          "@keyframes scrollReviews": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {duplicatedReviews.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 auto",
              width: { xs: "280px", md: "307px" },
              bgcolor: "#FFFFFF1A",
              borderRadius: "12px",
              p: "12px 16px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Box
                  key={star}
                  sx={{
                    color: "#FFB112",
                    fontSize: "20px",
                    opacity: star <= item.rating ? 1 : 0.3,
                  }}
                >
                  ★
                </Box>
              ))}
            </Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "21px",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "21px",
                color: "#8A8F98",
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
const AppShowcase = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px", px: 2 }}>
        <Box sx={{ mb: 10 }}>
          <Typography
            sx={{
              fontSize: { xs: "22px", md: "28px" },
              fontWeight: 600,
              mb: 2,
            }}
          >
            Result
          </Typography>

          <Typography variant="b2">
            After months of user research, design iteration, internal reviews,
            and usability testing, we finally came up with the final product
            that not only supports all the complexity of the business but also
            modernizes and delivers a personalized experience tailored to each
            user.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: "60px 100px",
          }}
        >
          {showcaseData.map((item, index) => (
            <Box key={index} sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "260px",
                  mx: "auto",
                  display: "block",
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.label}
                  sx={{
                    position: "absolute",

                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "86.6%",
                    objectFit: "cover",
                    display: "block",
                    zIndex: 0,
                  }}
                />

                <Box
                  component="img"
                  src="/projects/smartnas/iphoneFrame.webp"
                  alt="iPhone Frame"
                  sx={{
                    position: "relative",
                    width: "100%",
                    display: "block",
                    zIndex: 1,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: "13px",
                  color: "#6B7280",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const Smartnas: React.FC<DetailComponentProps> = (props) => (
  <DetailLayout
    {...props}
    bannerSrc="/projects/smartnas/banner.webp"
    maxWidth="1120px"
    isQrcode
  >
    <DemoSection />
    <IPhoneFrameSection />
    <CustomerTestimonialCard />
    <RevampReasonSection />
    <UserReviewsCarousel />
    <DashedFadeDivider />
    <AppShowcase />
  </DetailLayout>
);

export default Smartnas;
