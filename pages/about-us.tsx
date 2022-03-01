import React from "react";
import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";

import OurMission from "../features/about-us/components/OurMission";
import Partners from "../features/about-us/components/Partners";
import Team from "../features/about-us/components/Team";
import getWriters from "../features/about-us/api/getWriters";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Box as={"main"} layerStyle={"page-container"}>
        <OurMission />
        <Team />
        <Partners />
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("writers", () => getWriters());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default AboutUsPage;
