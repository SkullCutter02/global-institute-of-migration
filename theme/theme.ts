import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  sizes: {
    "4xs": "10rem",
    "5xs": "6rem",
    "6xs": "2rem",
  },
  colors: {
    primary: "#2669c0",
    error: "#bd1717",
  },
  fonts: {
    heading: "Merriweather, sans-serif",
    body: "Merriweather, sans-serif",
    secondary: "Saira Semi Condensed, sans-serif",
  },
  textStyles: {
    "small-description": {
      fontFamily: "secondary",
      color: "gray.500",
      fontWeight: 600,
      fontSize: 16,
    },
    "large-description": {
      fontFamily: "secondary",
      color: "gray.500",
      fontWeight: 600,
      fontSize: 18,
    },
    "preview-heading": {
      fontWeight: 500,
      mb: 1,
      fontSize: { base: 24, md: 22 },
      cursor: "pointer",
      lineHeight: 1.2,
    },
    information: {
      fontFamily: "secondary",
      fontSize: 14,
      fontWeight: 600,
      color: "gray.400",
    },
  },
  layerStyles: {
    "page-container": {
      py: 16,
      px: { base: 7, md: 10 },
    },
  },
});

export default theme;
