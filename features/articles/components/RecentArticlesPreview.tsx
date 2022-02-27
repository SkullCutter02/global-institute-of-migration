import React from "react";
import { Box, Heading, Image, VStack, Text } from "@chakra-ui/react";

import ArticlePreviewInformation from "./ArticlePreviewInformation";
import { useQuery } from "react-query";
import getRecentArticles from "../api/getRecentArticles";
import HOST from "../../../constants/host";

const RecentArticlesPreview: React.FC = () => {
  const { data: articles } = useQuery("recent-articles", () => getRecentArticles());

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
        {articles.slice(1).map((article) => (
          <Box w={"100%"} key={article.id}>
            <Image src={`${HOST}/assets/${article.main_article_image}`} w={"100%"} />
            <ArticlePreviewInformation article={article} />
            <Text as={"h2"} textStyle={"preview-heading"}>
              {article.heading}
            </Text>
            <Text textStyle={"small-description"}>{article.subheading}</Text>
          </Box>
        ))}
      </VStack>
    </>
  );
};

export default RecentArticlesPreview;
