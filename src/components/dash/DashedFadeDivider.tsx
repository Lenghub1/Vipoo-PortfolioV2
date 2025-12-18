import { Box } from "@mui/material";

const DashedFadeDivider = () => {
  return (
    <Box
      sx={{
        width: "100%",

        minHeight: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: "50px",
        gap: "20px",
        opacity: 0.2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,1) 0 4px, transparent 4px 8px)",
        }}
      />
    </Box>
  );
};

export default DashedFadeDivider;
