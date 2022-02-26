import React from "react";
import { Box, Heading, Image, VStack } from "@chakra-ui/react";
import ArticlePreviewInformation from "./ArticlePreviewInformation";
import ArticleDescriptionText from "./ArticleDescriptionText";

const RecentArticlesPreview: React.FC = () => {
  return (
    <>
      <VStack w={"450px"} as={"aside"} pl={10} spacing={7}>
        <Box>
          <Image src={"/placeholder.png"} w={"100%"} />
          <ArticlePreviewInformation />
          <Heading fontWeight={500} as={"h3"} cursor={"pointer"} mb={1} fontSize={20}>
            BREAKING: Kiley Listens To Sex Sounds
          </Heading>
          <ArticleDescriptionText fontSize={"small"}>
            Another unfortunate case of how horniness affects the average human being
          </ArticleDescriptionText>
        </Box>
        <Box>
          <Image src={"/placeholder.png"} w={"100%"} />
          <ArticlePreviewInformation />
          <Heading fontWeight={500} as={"h3"} cursor={"pointer"} mb={1} fontSize={20}>
            BREAKING: Kiley Listens To Sex Sounds
          </Heading>
          <ArticleDescriptionText fontSize={"small"}>
            Another unfortunate case of how horniness affects the average human being
          </ArticleDescriptionText>
        </Box>
      </VStack>
    </>
  );
};

export default RecentArticlesPreview;
