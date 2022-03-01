import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import getWriter from "../../features/about-us/api/getWriter";

const WriterPage: React.FC = () => {
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const writerId = context.query.writerId as string;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["writer", writerId], () => getWriter(writerId));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default WriterPage;
