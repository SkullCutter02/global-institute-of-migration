import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

import ArticlePreviewInformation from "./ArticlePreviewInformation";
import PreviewDescription from "../../../components/elements/PreviewDescription";

const MainArticlePreview: React.FC = () => {
  return (
    <>
      <Box
        w={"100%"}
        pr={{ base: 0, md: 10 }}
        pb={16}
        borderRight={{ base: "none", md: "3px solid" }}
        borderBottom={{ base: "3px solid", md: "none" }}
        borderColor={{ base: "gray.300", md: "gray.300" }}
      >
        <Image src={"/placeholder.png"} w={"100%"} />
        <ArticlePreviewInformation />
        <Heading cursor={"pointer"} mb={3}>
          Ukraine In Danger
        </Heading>
        <PreviewDescription fontSize={"large"}>
          Russia is Putin their army in Ukraine. Allies urge countries to sanction Russia. When will this
          madness end? At press time, wide Putin is seen in his natural habitat.
        </PreviewDescription>
      </Box>
    </>
  );
};

export default MainArticlePreview;
