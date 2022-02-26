import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const ArticlePreviewInformation: React.FC = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} my={3}>
        <Text fontFamily={"Solido-Bold"} color={"gray.400"}>
          Feb 11
        </Text>
        <Text fontFamily={"Solido-Bold"} color={"gray.400"}>
          Colin Chau
        </Text>
      </Flex>
    </>
  );
};

export default ArticlePreviewInformation;
