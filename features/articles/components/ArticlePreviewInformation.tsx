import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const ArticlePreviewInformation: React.FC = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} my={3}>
        <Text fontFamily={"secondary"} fontSize={14} fontWeight={600} color={"gray.400"}>
          Feb 11
        </Text>
        <Text fontFamily={"secondary"} fontSize={14} fontWeight={600} color={"gray.400"}>
          Colin Chau
        </Text>
      </Flex>
    </>
  );
};

export default ArticlePreviewInformation;
