import React from "react";
import { useQuery } from "react-query";
import { AspectRatio, Box, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";

import SectionHeading from "../../../components/elements/SectionHeading";
import getWriters from "../api/getWriters";
import ProgressiveImage from "../../../components/elements/ProgressiveImage";

const Team: React.FC = () => {
  const { data: writers } = useQuery("writers", () => getWriters());

  return (
    <>
      <SectionHeading heading={"OUR TEAM"} />
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 4 }}
        spacingX={{ base: 6, sm: 14, md: 12, lg: 16 }}
        spacingY={8}
        my={16}
      >
        {writers.map((writer) => (
          <Box key={writer.id} w={"100%"}>
            <AspectRatio maxW={"100%"} ratio={1}>
              <ProgressiveImage src={writer.image as string} borderRadius={"full"} boxSize={"100%"} />
            </AspectRatio>
            <Link href={`/writers/${writer.id}`}>
              <Text
                mt={4}
                fontWeight={600}
                fontFamily={"secondary"}
                textTransform={"uppercase"}
                textAlign={"center"}
                fontSize={{ base: 19, sm: 22, md: 25 }}
                cursor={"pointer"}
              >
                {writer.name}
              </Text>
            </Link>
            <Text
              fontWeight={600}
              fontFamily={"secondary"}
              textTransform={"uppercase"}
              color={"primary"}
              textAlign={"center"}
              fontSize={{ base: 15, md: 18 }}
            >
              {writer.role}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Team;
