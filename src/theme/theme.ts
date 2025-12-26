import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    caption1: React.CSSProperties;
    t1: React.CSSProperties;
    b1: React.CSSProperties;
    b2: React.CSSProperties;
    xs14?: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    caption1?: React.CSSProperties;
    t1?: React.CSSProperties;
    b1?: React.CSSProperties;
    b2?: React.CSSProperties;
    xs14?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    t1: true;
    b1: true;
    b2: true;
    xs14: true;
  }
}
const serifStack = '"Instrument Serif", "Playfair Display", "Georgia", serif';
const sansStack = '"Open Runde", "Inter", "Helvetica", sans-serif';

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#93D4FF",
    },
    background: {
      default: "#0B0C0D",
      paper: "#0E0E0F",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff7e",
    },
  },
  typography: {
    fontFamily: sansStack,
    h1: {
      fontFamily: serifStack,
      fontSize: "64px",
      fontWeight: 400,
      lineHeight: "64px",
      letterSpacing: "-2%",
    },
    h2: {
      fontFamily: serifStack,
      fontSize: "2.5rem",
      fontWeight: 400,
    },
    h3: {
      fontFamily: serifStack,
      fontSize: "23px",
      lineHeight: "32px",
      fontWeight: 500,
    },
    h4: {
      fontFamily: serifStack,
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    body1: {
      fontFamily: sansStack,
      fontSize: "17px",
      lineHeight: "26px",
    },
    body2: {
      fontFamily: sansStack,
      fontSize: "0.95rem",
      lineHeight: 1.6,
    },
    caption1: {
      fontFamily: sansStack,
      fontSize: "20rem",
      lineHeight: "20px",
      fontWeight: 400,
      color: "#b0b0b0",
    },
    t1: {
      fontFamily: serifStack,
      fontSize: "28px",
      lineHeight: "36px",
      color: "#FFFFFF",
    },
    b1: {
      fontFamily: sansStack,
      fontSize: "15px",
      lineHeight: "24px",
      color: "#FFFFFF",
      fontWeight: 500,
    },
    b2: {
      fontFamily: sansStack,
      fontSize: "15px",
      lineHeight: "24px",
      color: "#FFFFFF",
      opacity: 0.5,
    },
    xs14: {
      fontFamily: sansStack,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          textTransform: "none",
        },
      },
    },
  },
});
