import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const ArticlePreviewInformation: React.FC = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} my={3}>
        <Text textStyle={"information"}>Feb 11</Text>
        <Text textStyle={"information"}>Colin Chau</Text>
      </Flex>
    </>
  );
};

export default ArticlePreviewInformation;
