import React from "react";
import { Heading } from "@chakra-ui/react";

const PreviewHeading: React.FC = ({ children }) => {
  return (
    <>
      <Heading fontWeight={500} as={"h3"} cursor={"pointer"} mb={1} fontSize={{ base: 24, md: 20 }}>
        {children}
      </Heading>
    </>
  );
};

export default PreviewHeading;
