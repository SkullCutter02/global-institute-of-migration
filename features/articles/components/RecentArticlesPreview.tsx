import React from "react";
import { Box, Heading, Image, VStack } from "@chakra-ui/react";

import ArticlePreviewInformation from "./ArticlePreviewInformation";
import PreviewDescription from "../../../components/elements/PreviewDescription";
import PreviewHeading from "../../../components/elements/PreviewHeading";

const RecentArticlesPreview: React.FC = () => {
  return (
    <>
      <VStack
        w={{ base: "100%", md: "400px", xl: "450px" }}
        as={"aside"}
        pl={{ base: 0, md: 10 }}
        pt={{ base: 16, md: 0 }}
        spacing={7}
      >
        <Heading fontSize={28}>Recent Articles</Heading>
        <Box>
          <Image src={"/placeholder.png"} w={"100%"} />
          <ArticlePreviewInformation />
          <PreviewHeading>BREAKING: Kiley Listens To Sex Sounds</PreviewHeading>
          <PreviewDescription fontSize={"small"}>
            Another unfortunate case of how horniness affects the average human being
          </PreviewDescription>
        </Box>
        <Box>
          <Image src={"/placeholder.png"} w={"100%"} />
          <ArticlePreviewInformation />
          <PreviewHeading>BREAKING: Kiley Listens To Sex Sounds</PreviewHeading>
          <PreviewDescription fontSize={"small"}>
            Another unfortunate case of how horniness affects the average human being
          </PreviewDescription>
        </Box>
      </VStack>
    </>
  );
};

export default RecentArticlesPreview;
