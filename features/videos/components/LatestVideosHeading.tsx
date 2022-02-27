import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

const LatestVideosHeading: React.FC = () => {
  return (
    <>
      <Flex
        borderY={"3px solid"}
        borderColor={"gray.300"}
        alignItems={"center"}
        justifyContent={"space-between"}
        pb={4}
        pt={5}
      >
        <Heading fontFamily={"Solido-ExtraBold"} color={"primary"}>
          LATEST VIDEOS
        </Heading>
        <Text fontSize={18} fontFamily={"Solido-ExtraBold"} cursor={"pointer"} color={"gray.500"}>
          View All
        </Text>
      </Flex>
    </>
  );
};

export default LatestVideosHeading;