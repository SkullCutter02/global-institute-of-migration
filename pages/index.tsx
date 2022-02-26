import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import MainArticlePreview from "../components/ui/home/MainArticlePreview";
import RecentArticlesPreview from "../components/ui/home/RecentArticlesPreview";

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
