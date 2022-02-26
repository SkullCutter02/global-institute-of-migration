import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  fontSize: "large" | "small";
}

const ArticleDescriptionText: React.FC<Props> = ({ children, fontSize }) => {
  return (
    <>
      <Text
        fontFamily={"Solido-Medium"}
        color={"gray.500"}
        lineHeight={fontSize === "large" ? 1.5 : 1.2}
        fontSize={{ base: fontSize === "large" ? 18 : 16, md: fontSize === "large" ? 18 : 14 }}
      >
        {children}
      </Text>
    </>
  );
};

export default ArticleDescriptionText;
