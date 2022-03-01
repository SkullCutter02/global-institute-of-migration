import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import getRecentVideos from "../api/getRecentVideos";
import VideoCard from "./VideoCard";

const LatestVideosPreview: React.FC = () => {
  const { data: videos } = useQuery("recent-videos", () => getRecentVideos());

  return (
    <>
      <SimpleGrid mt={10} columns={{ base: 1, md: 3 }} spacingX={5} spacingY={8}>
        {videos.map((video) => (
          <VideoCard video={video} key={video.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default LatestVideosPreview;
