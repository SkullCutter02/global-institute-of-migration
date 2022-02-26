import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import MainArticlePreview from "../components/ui/home/MainArticlePreview";
import RecentArticlesPreview from "../components/ui/home/RecentArticlesPreview";

const HomePage: React.FC = () => {
  return (
    <>
      <Box as={"main"} py={16} px={10}>
        <Flex>
          <MainArticlePreview />
          <RecentArticlesPreview />
        </Flex>
      </Box>
    </>
  );
};

export default HomePage;
