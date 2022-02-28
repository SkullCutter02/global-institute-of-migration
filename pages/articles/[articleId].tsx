import React from "react";
import { Box, Flex, Heading, Text, Image, Avatar } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";

import getArticle from "../../features/articles/api/getArticle";
import HOST from "../../constants/host";
import formatMediaDateWithTime from "../../utils/formatMediaDateWithTime";

const ArticlePage: React.FC = () => {
  const router = useRouter();
  const articleId = router.query.articleId as string;

  const { data: article } = useQuery(["article", articleId], () => getArticle(articleId));

  return (
    <>
      {typeof article.author !== "string" && (
        <Box as={"main"} py={16} px={[7, 10, 20, 40]}>
          <Heading textTransform={"capitalize"} fontWeight={700}>
            {article.heading}
          </Heading>
          <Text textStyle={"large-description"} mt={2.5} fontSize={{ base: 20, md: 25 }}>
            {article.subheading}
          </Text>
          <Flex mt={10}>
            <Avatar src={`${HOST}/assets/${article.author.image}`} />
            <Box ml={5}>
              <Text cursor={"pointer"} fontFamily={"secondary"} fontWeight={600}>
                {article.author.name}
              </Text>
              <Text fontFamily={"secondary"} color={"gray.500"}>
                Published: {formatMediaDateWithTime(article.created_at)}
                {article.updated_at ? ` (Updated: ${formatMediaDateWithTime(article.updated_at)})` : ""}
              </Text>
            </Box>
          </Flex>
          <Image my={10} src={`${HOST}/assets/${article.main_article_image}`} w={"100%"} />
        </Box>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const articleId = context.query.articleId as string;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["article", articleId], () => getArticle(articleId));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default ArticlePage;
