import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import Link from "next/link";

import ArticlePreviewInformation from "./ArticlePreviewInformation";
import getRecentArticles from "../api/getRecentArticles";
import HOST from "../../../constants/host";

const MainArticlePreview: React.FC = () => {
  const { data: articles } = useQuery("recent-articles", () => getRecentArticles());

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
        <Image src={`${HOST}/assets/${articles[0].main_article_image}`} w={"100%"} />
        <ArticlePreviewInformation article={articles[0]} />
        <Link href={`/articles/${articles[0].id}`}>
          <Heading
            as={"h1"}
            textTransform={"capitalize"}
            fontSize={34}
            fontWeight={900}
            cursor={"pointer"}
            mb={3}
          >
            {articles[0].heading}
          </Heading>
        </Link>
        <Text textStyle={"large-description"}>{articles[0].subheading}</Text>
      </Box>
    </>
  );
};

export default MainArticlePreview;
