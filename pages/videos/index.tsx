import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";

import getVideosPaginated from "../../features/videos/api/getVideosPaginated";
import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionHeading from "../../components/elements/SectionHeading";
import VideoCard from "../../features/videos/components/VideoCard";
import PaginationButtons from "../../components/elements/PaginationButtons";

const VideosPage: React.FC = () => {
  const router = useRouter();
  const page = parseInt(router.query.page as string);

  const {
    data: { data: videos, hasMore },
  } = useQuery(["videos", page], () => getVideosPaginated(page));

  return (
    <>
      <Box as={"main"} layerStyle={"page-container"}>
        <SectionHeading heading={"ALL VIDEOS"} />
        <SimpleGrid mt={10} mb={20} columns={{ base: 1, sm: 2, md: 3 }} spacing={5} spacingY={10}>
          {videos.map((video) => (
            <VideoCard video={video} includeYear />
          ))}
        </SimpleGrid>
        <PaginationButtons page={page} hasMore={hasMore} to={"/videos"} />
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

  await queryClient.prefetchQuery(["videos", page], () => getVideosPaginated(page));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default VideosPage;
