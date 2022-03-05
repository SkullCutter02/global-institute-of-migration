import React from "react";
import SectionHeading from "../../../components/elements/SectionHeading";
import { Text } from "@chakra-ui/react";

const OurMission: React.FC = () => {
  return (
    <>
      <SectionHeading heading={"OUR MISSION"} />
      <Text my={8} lineHeight={1.9}>
        Our mission is to engage the youth in Hong Kong and abroad with the most cultivating problems of
        migration for intellectual empowerment and innovation.
      </Text>
    </>
  );
};

export default OurMission;
