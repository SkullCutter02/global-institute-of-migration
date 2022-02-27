import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

import MainArticlePreview from "../features/articles/components/MainArticlePreview";
import RecentArticlesPreview from "../features/articles/components/RecentArticlesPreview";
import LatestVideosHeading from "../features/videos/components/LatestVideosHeading";
import LatestVideosPreview from "../features/videos/components/LatestVideosPreview";
import { dehydrate, QueryClient } from "react-query";
import getRecentArticles from "../features/articles/api/getRecentArticles";

const HomePage: React.FC = () => {
  return (
    <>
      <Box as={"main"} py={16} px={{ base: 7, md: 10 }}>
        <Flex as={"section"} flexDir={{ base: "column", md: "row" }}>
          <MainArticlePreview />
          <RecentArticlesPreview />
        </Flex>

        <Box my={16} as={"section"}>
          <LatestVideosHeading />
          <LatestVideosPreview />
        </Box>
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("recent-articles", () => getRecentArticles());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
