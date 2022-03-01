import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import getVideo from "../../features/videos/api/getVideo";

const VideoPage: React.FC = () => {
  return <></>;
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
