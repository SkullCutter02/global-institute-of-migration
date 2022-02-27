import React from "react";
import { Box, Heading, Image, VStack, Text } from "@chakra-ui/react";

import ArticlePreviewInformation from "./ArticlePreviewInformation";

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
          <Text as={"h2"} textStyle={"preview-heading"}>
            BREAKING: Kiley Listens To Sex Sounds
          </Text>
          <Text textStyle={"small-description"}>
            Another unfortunate case of how horniness affects the average human being
          </Text>
        </Box>
        <Box>
          <Image src={"/placeholder.png"} w={"100%"} />
          <ArticlePreviewInformation />
          <Text as={"h2"} textStyle={"preview-heading"}>
            BREAKING: Kiley Listens To Sex Sounds
          </Text>
          <Text textStyle={"small-description"}>
            Another unfortunate case of how horniness affects the average human being
          </Text>
        </Box>
      </VStack>
    </>
  );
};

export default RecentArticlesPreview;
