import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import getVideosPaginated from "../../features/videos/api/getVideosPaginated";

const VideosPage: React.FC = () => {
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = parseInt(context.query.page as string);

  if (!page || page <= 0) {
    return {
      notFound: true,
    };
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["videos", page], () => getVideosPaginated(page));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default VideosPage;
