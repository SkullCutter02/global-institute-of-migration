import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { TypeOf } from "@directus/sdk";
import { DirectusCollections } from "../../../generated/directus";
import HOST from "../../../constants/host";
import formatMediaDate from "../../../utils/formatMediaDate";

interface Props {
  video: Partial<TypeOf<DirectusCollections, "videos">>;
}

const VideoCard: React.FC<Props> = ({ video }) => {
  return (
    <>
      <Box w={"100%"}>
        <Image
          maxH={{ base: null, md: "250px" }}
          objectFit={"cover"}
          src={`${HOST}/assets/${video.thumbnail}`}
          w={"100%"}
        />
        <Text my={2} textStyle={"information"}>
          {formatMediaDate(video.created_at)}
        </Text>
        <Text textStyle={"preview-heading"}>{video.title}</Text>
        <Text textStyle={"small-description"}>{video.description}</Text>
      </Box>
    </>
  );
};

export default VideoCard;
