import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { TypeOf } from "@directus/sdk";
import Link from "next/link";

import { DirectusCollections } from "../../../generated/directus";
import formatMediaDate from "../../../utils/formatMediaDate";
import ProgressiveImage from "../../../components/elements/ProgressiveImage";

interface Props {
  video: Partial<TypeOf<DirectusCollections, "videos">>;
  includeYear?: boolean;
}

const VideoCard: React.FC<Props> = ({ video, includeYear = false }) => {
  return (
    <>
      <Box w={"100%"}>
        <ProgressiveImage
          maxH={{ base: null, md: "250px" }}
          objectFit={"cover"}
          src={video.thumbnail}
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
