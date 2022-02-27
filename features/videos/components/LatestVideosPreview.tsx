import React from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

const LatestVideosPreview: React.FC = () => {
  return (
    <>
      <SimpleGrid mt={10} columns={{ base: 1, md: 3 }} spacing={5}>
        <Box w={"100%"}>
          <Image maxH={{ base: null, md: "250px" }} objectFit={"cover"} src={"/placeholder.png"} w={"100%"} />
          <Text my={2} textStyle={"information"}>
            Feb 11
          </Text>
          <Text textStyle={"preview-heading"}>
            Jason Reconsiders His Sexuality As Jonathan Pins Him On Bed
          </Text>
          <Text textStyle={"small-description"}>
            The sexually frustrated male hopes to find a new companion
          </Text>
        </Box>
        <Box w={"100%"}>
          <Image maxH={{ base: null, md: "250px" }} objectFit={"cover"} src={"/placeholder.png"} w={"100%"} />
          <Text my={2} textStyle={"information"}>
            Feb 11
          </Text>
          <Text textStyle={"preview-heading"}>
            Jason Reconsiders His Sexuality As Jonathan Pins Him On Bed
          </Text>
          <Text textStyle={"small-description"}>
            The sexually frustrated male hopes to find a new companion
          </Text>
        </Box>
        <Box w={"100%"}>
          <Image
            maxH={{ base: null, md: "250px" }}
            objectFit={"cover"}
            src={"/placeholder2.png"}
            w={"100%"}
          />
          <Text my={2} textStyle={"information"}>
            Feb 11
          </Text>
          <Text textStyle={"preview-heading"}>
            Jason Reconsiders His Sexuality As Jonathan Pins Him On Bed
          </Text>
          <Text textStyle={"small-description"}>
            The sexually frustrated male hopes to find a new companion
          </Text>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default LatestVideosPreview;
