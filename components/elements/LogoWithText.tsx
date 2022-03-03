import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.png";

const LogoWithText: React.FC = () => {
  return (
    <>
      <Link href={"/"}>
        <Flex alignItems={"center"} cursor={"pointer"}>
          <Image src={logo} layout={"fixed"} />
          <Text fontWeight={"bold"} color={"white"} ml={4} fontSize={23}>
            WFMR
          </Text>
        </Flex>
      </Link>
    </>
  );
};

export default LogoWithText;
