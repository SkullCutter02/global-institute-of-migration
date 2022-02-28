import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import { Box, VStack } from "@chakra-ui/react";

import getArticlesPaginated from "../../features/articles/api/getArticlesPaginated";
import SectionHeading from "../../components/elements/SectionHeading";
import ArticlePreview from "../../features/articles/components/ArticlePreview";
import PaginationButtons from "../../components/elements/PaginationButtons";

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
        <VStack as={"section"} spacing={10} mt={10} mb={20}>
          {articles.map((article) => (
            <ArticlePreview article={article} key={article.id} />
          ))}
        </VStack>
        <PaginationButtons page={page} hasMore={hasMore} to={"/articles"} />
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = parseInt(context.query.page as string);

  if (!page || page <= 0) {
    return {
      notFound: true,
    };
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["articles", page], () => getArticlesPaginated(page));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default ArticlesPage;
