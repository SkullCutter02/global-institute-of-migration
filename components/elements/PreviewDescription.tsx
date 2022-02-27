import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  fontSize: "large" | "small";
}

const PreviewDescription: React.FC<Props> = ({ children, fontSize }) => {
  return (
    <>
      <Text
        fontFamily={"secondary"}
        color={"gray.500"}
        fontWeight={600}
        fontSize={fontSize === "large" ? 18 : 16}
      >
        {children}
      </Text>
    </>
  );
};

export default PreviewDescription;
