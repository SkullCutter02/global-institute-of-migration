import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  sizes: {
    "4xs": "10rem",
    "5xs": "6rem",
    "6xs": "2rem",
  },
  colors: {
    primary: "#2669c0", // TODO: change primary color
    error: "#bd1717",
  },
  fonts: {
    heading: "Tiempos Headline, sans-serif",
    body: "Tiempos Headline, sans-serif",
    secondary: "Saira Semi Condensed, sans-serif",
  },
});

export default theme;
