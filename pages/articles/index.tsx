import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import { Box, Image, VStack, HStack, Text, Heading } from "@chakra-ui/react";

import getArticlesPaginated from "../../features/articles/api/getArticlesPaginated";
import SectionHeading from "../../components/elements/SectionHeading";
import HOST from "../../constants/host";
import formatMediaDate from "../../utils/formatMediaDate";

const ArticlesPage: React.FC = () => {
  const router = useRouter();
  const page = parseInt(router.query.page as string);

  const {
    data: { hasMore, data: articles },
  } = useQuery(["articles", page], () => getArticlesPaginated(page));

  return (
    <>
      <Box as={"main"} layerStyle={"page-container"}>
        <SectionHeading heading={"ALL ARTICLES"} />
        <VStack as={"section"} spacing={10} mt={10}>
          {articles.map((article) => (
            <HStack
              as={"article"}
              w={"100%"}
              key={article.id}
              justifyContent={"space-between"}
              alignItems={"stretch"}
              spacing={12}
            >
              <Image src={`${HOST}/assets/${article.main_article_image}`} objectFit={"cover"} w={"35%"} />
              {typeof article.author !== "string" && (
                <Box w={"65%"}>
                  <Text textStyle={"information"} mb={4}>
                    {article.author.name}
                  </Text>
                  <Heading cursor={"pointer"} fontSize={27} fontWeight={500}>
                    {article.heading}
                  </Heading>
                  <Text textStyle={"large-description"} mb={4}>
                    {article.subheading}
                  </Text>
                  <Text
                    fontFamily={"secondary"}
                    w={"100%"}
                    color={"gray.500"}
                    fontWeight={"light"}
                    noOfLines={3}
                    mb={4}
                  >
                    {article.body}
                  </Text>
                  <Text textStyle={"information"}>
                    {formatMediaDate(article.created_at, { includeYear: true })}
                  </Text>
                </Box>
              )}
            </HStack>
          ))}
        </VStack>
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.query.page) {
    return {
      notFound: true,
    };
  }

  const page = parseInt(context.query.page as string);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["articles", page], () => getArticlesPaginated(page));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default ArticlesPage;
