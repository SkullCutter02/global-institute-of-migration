import React from "react";
import { TypeOf } from "@directus/sdk";
import { AspectRatio, Box, Text } from "@chakra-ui/react";
import Link from "next/link";

import { DirectusCollections } from "../../../generated/directus";
import ProgressiveImage from "../../../components/elements/ProgressiveImage";

interface Props {
  writer: Partial<TypeOf<DirectusCollections, "writers">>;
}

const WriterPreview: React.FC<Props> = ({ writer }) => {
  return (
    <>
      <Box key={writer.id} w={{ base: "40%", md: "33.3%", lg: "20%" }}>
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
    </>
  );
};

export default WriterPreview;
