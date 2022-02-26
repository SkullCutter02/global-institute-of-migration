import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

import ArticlePreviewInformation from "./ArticlePreviewInformation";
import ArticleDescriptionText from "./ArticleDescriptionText";

const MainArticlePreview: React.FC = () => {
  return (
    <>
      <Box w={"100%"} pr={10} pb={16} borderRight={"3px solid"} borderColor={"gray.300"}>
        <Image src={"/placeholder.png"} w={"100%"} />
        <ArticlePreviewInformation />
        <Heading cursor={"pointer"} mb={3}>
          Ukraine In Danger
        </Heading>
        <ArticleDescriptionText fontSize={"large"}>
          Russia is Putin their army in Ukraine. Allies urge countries to sanction Russia. When will this
          madness end? At press time, wide Putin is seen in his natural habitat.
        </ArticleDescriptionText>
      </Box>
    </>
  );
};

export default MainArticlePreview;
