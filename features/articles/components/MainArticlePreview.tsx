import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

import ArticlePreviewInformation from "./ArticlePreviewInformation";

const MainArticlePreview: React.FC = () => {
  return (
    <>
      <Box
        w={"100%"}
        pr={{ base: 0, md: 10 }}
        pb={16}
        borderRight={{ base: "none", md: "3px solid" }}
        borderBottom={{ base: "3px solid", md: "none" }}
        borderColor={{ base: "gray.300", md: "gray.300" }}
      >
        <Image src={"/placeholder.png"} w={"100%"} />
        <ArticlePreviewInformation />
        <Heading as={"h1"} cursor={"pointer"} mb={3}>
          Ukraine In Danger
        </Heading>
        <Text textStyle={"large-description"}>
          Russia is Putin their army in Ukraine. Allies urge countries to sanction Russia. When will this
          madness end? At press time, wide Putin is seen in his natural habitat.
        </Text>
      </Box>
    </>
  );
};

export default MainArticlePreview;
