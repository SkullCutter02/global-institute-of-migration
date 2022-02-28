import React from "react";
import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";

import getArticle from "../../features/articles/api/getArticle";

const ArticlePage: React.FC = () => {
  return (
    <>
      <Box as={"main"} layerStyle={"page-container"}></Box>
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
