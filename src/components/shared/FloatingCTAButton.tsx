import React from "react";
import { Button, Box, type ButtonProps } from "@mui/material";

type CircleConfig = {
  color: string;
  size: number;
  delay: string;
  duration: string;
  animation: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

const baseCircles: CircleConfig[] = [
  {
    color: "#85A7DF",
    size: 58,
    top: "-24px",
    left: "-12px",
    delay: "0s",
    duration: "5.5s",
    animation: "floatCircleA",
  },
  {
    color: "#F7ABA4",
    size: 58,
    top: "18%",
    right: "-10px",
    delay: "0.35s",
    duration: "6.2s",
    animation: "floatCircleB",
  },
  {
    color: "#F6E28D",
    size: 58,
    bottom: "-18px",
    left: "38%",
    delay: "0.6s",
    duration: "7s",
    animation: "floatCircleC",
  },
];

interface FloatingCTAButtonProps extends Omit<ButtonProps, "variant"> {
  label: string;
  iconSrc?: string;
  appearance?: "solid" | "ghost";
  height?: number;
  borderRadius?: number;
  paddingX?: number | string;
}

const FloatingCTAButton: React.FC<FloatingCTAButtonProps> = ({
  label,
  iconSrc = "hello/hi5.svg",
  appearance = "solid",
  height = 48,
  borderRadius = 24,
  paddingX = 24,
  sx,
  ...buttonProps
}) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const horizontalPadding =
    typeof paddingX === "number" ? `${paddingX}px` : paddingX;

  const variantStyles =
    appearance === "ghost"
      ? {
          bgcolor: "transparent",
          color: "white",
          border: "1px solid rgba(255,255,255,0.2)",
        }
      : {
          bgcolor: "#FFFFFF",
          color: "#000000",
          border: "1px solid rgba(255,255,255,1)",
        };

  return (
    <Button
      disableRipple
      disableTouchRipple
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      sx={{
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
        px: horizontalPadding,
        height,
        minHeight: height,
        borderRadius,
        fontWeight: 600,
        fontSize: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        transform: isPressed ? "scale(0.95)" : "scale(1)",
        transition:
          "transform 0.22s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
        "&:hover .floating-circle": {
          opacity: 0.9,
        },
        "@keyframes floatCircleA": {
          "0%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "30%": { transform: "translate3d(14px, -8px, 0) scale(1.05)" },
          "60%": { transform: "translate3d(-6px, 10px, 0) scale(0.95)" },
          "100%": { transform: "translate3d(0, 0, 0) scale(1)" },
        },
        "@keyframes floatCircleB": {
          "0%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "20%": { transform: "translate3d(-10px, 6px, 0) scale(0.9)" },
          "55%": { transform: "translate3d(8px, -12px, 0) scale(1.08)" },
          "85%": { transform: "translate3d(-4px, 4px, 0) scale(1)" },
          "100%": { transform: "translate3d(0, 0, 0) scale(1)" },
        },
        "@keyframes floatCircleC": {
          "0%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "25%": { transform: "translate3d(6px, 14px, 0) scale(1.1)" },
          "50%": { transform: "translate3d(-12px, -6px, 0) scale(0.92)" },
          "75%": { transform: "translate3d(8px, -4px, 0) scale(1.05)" },
          "100%": { transform: "translate3d(0, 0, 0) scale(1)" },
        },
        ...variantStyles,
        ...sx,
      }}
      {...buttonProps}
    >
      {baseCircles.map((circle) => (
        <Box
          key={circle.color}
          className="floating-circle"
          sx={{
            position: "absolute",
            width: circle.size,
            height: circle.size,
            borderRadius: "50%",
            backgroundColor: circle.color,
            opacity: 0,
            pointerEvents: "none",
            transition: "opacity 0.3s ease",
            animation: `${circle.animation} ${circle.duration} ease-in-out infinite`,
            animationDelay: circle.delay,
            filter: "blur(24px)",
            ...(circle.top ? { top: circle.top } : {}),
            ...(circle.right ? { right: circle.right } : {}),
            ...(circle.bottom ? { bottom: circle.bottom } : {}),
            ...(circle.left ? { left: circle.left } : {}),
          }}
        />
      ))}

      {iconSrc && (
        <Box
          component="img"
          src={iconSrc}
          alt="cta-icon"
          className="cta-icon"
          sx={{ width: "18px", height: "18px", zIndex: 1 }}
        />
      )}
      <Box component="span" sx={{ zIndex: 1 }}>
        {label}
      </Box>
    </Button>
  );
};

export default FloatingCTAButton;
