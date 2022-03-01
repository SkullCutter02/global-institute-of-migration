import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { Box, Heading, Text } from "@chakra-ui/react";
import YouTube from "react-youtube";
import { useRouter } from "next/router";

import getVideo from "../../features/videos/api/getVideo";
import getYoutubeVideoID from "../../utils/getYoutubeVideoID";
import formatMediaDate from "../../utils/formatMediaDate";

const VideoPage: React.FC = () => {
  const router = useRouter();
  const videoId = router.query.videoId as string;

  const { data: video } = useQuery(["video", videoId], () => getVideo(videoId));

  return (
    <>
      <Box as={"main"} py={16} mb={24} px={[7, 10, 20, 40]}>
        <YouTube
          containerClassName="youtube-iframe-video-container"
          className="youtube-iframe-video"
          title={video.title}
          videoId={getYoutubeVideoID(video.video_link)}
        />
        <Heading textTransform={"capitalize"} mt={10} fontWeight={700}>
          {video.title}
        </Heading>
        <Text fontFamily={"secondary"} fontWeight={500} mt={2} color={"gray.500"}>
          {formatMediaDate(video.created_at, { includeYear: true })}
        </Text>
        <Text textStyle={"large-description"} mt={6}>
          {video.description}
        </Text>
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const videoId = context.query.videoId as string;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["video", videoId], () => getVideo(videoId));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default VideoPage;
