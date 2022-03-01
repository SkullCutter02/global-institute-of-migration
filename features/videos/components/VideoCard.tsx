import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { TypeOf } from "@directus/sdk";
import Link from "next/link";

import { DirectusCollections } from "../../../generated/directus";
import HOST from "../../../constants/host";
import formatMediaDate from "../../../utils/formatMediaDate";

interface Props {
  video: Partial<TypeOf<DirectusCollections, "videos">>;
  includeYear?: boolean;
}

const VideoCard: React.FC<Props> = ({ video, includeYear = false }) => {
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
          {formatMediaDate(video.created_at, { includeYear })}
        </Text>
        <Link href={`/videos/${video.id}`}>
          <Text textStyle={"preview-heading"}>{video.title}</Text>
        </Link>
        <Text textStyle={"small-description"}>{video.description}</Text>
      </Box>
    </>
  );
};

export default VideoCard;
