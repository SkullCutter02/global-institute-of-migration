import React from "react";
import { Box, Flex, Heading, Text, Avatar } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import Link from "next/link";

import getArticle from "../../features/articles/api/getArticle";
import HOST from "../../constants/host";
import formatMediaDateWithTime from "../../utils/formatMediaDateWithTime";
import ArticleMetaHead from "../../features/articles/components/ArticleMetaHead";
import ProgressiveImage from "../../components/elements/ProgressiveImage";
import ArticleBody from "../../features/articles/components/ArticleBody";

const ArticlePage: React.FC = () => {
  const router = useRouter();
  const articleId = router.query.articleId as string;

  const { data: article } = useQuery(["article", articleId], () => getArticle(articleId));

  return (
    <>
      <ArticleMetaHead article={article} />
      {typeof article.author !== "string" && (
        <Box as={"main"} mb={24} py={16} px={[7, 10, 20, 40]}>
          <Text textTransform={"capitalize"} color={"gray.500"} fontSize={20} fontFamily={"secondary"} mb={4}>
            {article.category}
          </Text>
          <Heading textTransform={"capitalize"} fontWeight={700}>
            {article.heading}
          </Heading>
          <Text textStyle={"large-description"} mt={2.5} fontSize={{ base: 20, md: 25 }}>
            {article.subheading}
          </Text>
          <Flex mt={10}>
            <Avatar src={`${HOST}/assets/${article.author.image}?width=100`} />
            <Box ml={5}>
              <Link href={`/writers/${article.author.id}`}>
                <Text cursor={"pointer"} fontFamily={"secondary"} fontWeight={600}>
                  {article.author.name}
                </Text>
              </Link>
              <Text fontFamily={"secondary"} color={"gray.500"}>
                Published: {formatMediaDateWithTime(article.created_at)}
                {article.updated_at ? ` (Updated: ${formatMediaDateWithTime(article.updated_at)})` : ""}
              </Text>
            </Box>
          </Flex>
          <ProgressiveImage my={10} src={article.main_article_image as string} w={"100%"} />
          <ArticleBody article={article} />
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
