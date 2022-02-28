import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";

import getArticlesPaginated from "../../features/articles/api/getArticlesPaginated";

const ArticlesPage: React.FC = () => {
  return <></>;
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
