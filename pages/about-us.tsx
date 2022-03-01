import React from "react";
import { Box } from "@chakra-ui/react";

import OurMission from "../features/about-us/components/OurMission";
import Partners from "../features/about-us/components/Partners";
import Team from "../features/about-us/components/Team";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Box as={"main"} layerStyle={"page-container"}>
        <OurMission />
        <Team />
        <Partners />
      </Box>
    </>
  );
};

export default AboutUsPage;
