import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import MainArticlePreview from "../features/articles/components/MainArticlePreview";
import RecentArticlesPreview from "../features/articles/components/RecentArticlesPreview";

const HomePage: React.FC = () => {
  return (
    <>
      <Box as={"main"} py={16} px={{ base: 7, md: 10 }}>
        <Flex flexDir={{ base: "column", md: "row" }}>
          <MainArticlePreview />
          <RecentArticlesPreview />
        </Flex>
      </Box>
    </>
  );
};

export default HomePage;
