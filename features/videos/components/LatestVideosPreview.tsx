import React from "react";
import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import PreviewHeading from "../../../components/elements/PreviewHeading";
import PreviewDescription from "../../../components/elements/PreviewDescription";

const LatestVideosPreview: React.FC = () => {
  return (
    <>
      <SimpleGrid mt={10} columns={{ base: 1, md: 3 }} spacing={5}>
        <Box w={"100%"}>
          <Image maxH={{ base: null, md: "250px" }} objectFit={"cover"} src={"/placeholder.png"} w={"100%"} />
          <Text my={2} fontFamily={"secondary"} fontSize={14} fontWeight={600} color={"gray.400"}>
            Feb 11
          </Text>
          <PreviewHeading>Jason Reconsiders His Sexuality As Jonathan Pins Him On Bed</PreviewHeading>
          <PreviewDescription fontSize={"large"}>
            The sexually frustrated male hopes to find a new companion
          </PreviewDescription>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default LatestVideosPreview;
