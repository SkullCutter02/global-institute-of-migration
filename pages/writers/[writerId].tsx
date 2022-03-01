import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { AspectRatio, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import getWriter from "../../features/about-us/api/getWriter";
import HOST from "../../constants/host";

const WriterPage: React.FC = () => {
  const router = useRouter();
  const writerId = router.query.writerId as string;

  const { data: writer } = useQuery(["writer", writerId], () => getWriter(writerId));

  return (
    <>
      <Flex as={"main"} flexDirection={{ base: "column", sm: "row" }} layerStyle={"page-container"}>
        <Box w={{ base: "85%", sm: "25%" }} margin={{ base: "0 auto", sm: 0 }}>
          <AspectRatio maxW={"100%"} ratio={1}>
            <Image boxSize={"100%"} borderRadius={"full"} src={`${HOST}/assets/${writer.image}`} />
          </AspectRatio>
        </Box>
        <Box mt={{ base: 12, sm: 0 }} ml={{ base: 0, sm: "8%" }} w={{ base: "100%", sm: "67%" }}>
          <Heading fontSize={33}>{writer.name}</Heading>
          <Text
            mt={2}
            fontWeight={600}
            fontFamily={"secondary"}
            textTransform={"uppercase"}
            color={"primary"}
          >
            {writer.role}
          </Text>
          <Text mt={10} fontSize={20} color={"gray.500"} fontFamily={"secondary"}>
            {writer.bio}
          </Text>
        </Box>
      </Flex>
    </>
  );
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
