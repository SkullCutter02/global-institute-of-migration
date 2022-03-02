import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";

import MainArticlePreview from "../features/articles/components/MainArticlePreview";
import RecentArticlesPreview from "../features/articles/components/RecentArticlesPreview";
import SectionHeading from "../components/elements/SectionHeading";
import LatestVideosPreview from "../features/videos/components/LatestVideosPreview";
import getRecentArticles from "../features/articles/api/getRecentArticles";
import getRecentVideos from "../features/videos/api/getRecentVideos";

const HomePage: React.FC = () => {
  return (
    <>
      <Box as={"main"} layerStyle={"page-container"}>
        <Flex as={"section"} flexDir={{ base: "column", md: "row" }}>
          <MainArticlePreview />
          <RecentArticlesPreview />
        </Flex>

        <Box my={16} as={"section"}>
          <SectionHeading heading={"LATEST VIDEOS"} hasViewAll to={"/videos?page=1"} />
          <LatestVideosPreview />
        </Box>
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("recent-articles", () => getRecentArticles());
  await queryClient.prefetchQuery("recent-videos", () => getRecentVideos());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
