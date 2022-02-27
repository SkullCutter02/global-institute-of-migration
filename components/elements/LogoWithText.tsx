import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import logo from "../../public/logo.png";

const LogoWithText: React.FC = () => {
  return (
    <>
      <Flex alignItems={"center"} cursor={"pointer"}>
        <Image src={logo} layout={"fixed"} />
        <Text fontWeight={"bold"} color={"white"} ml={4} fontSize={23}>
          WFRM
        </Text>
      </Flex>
    </>
  );
};

export default LogoWithText;
