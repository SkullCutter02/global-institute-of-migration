import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import logo from "../../../public/logo.png";

const NavbarLogo: React.FC = () => {
  return (
    <>
      <Flex alignItems={"center"} cursor={"pointer"}>
        <Image src={logo} layout={"fixed"} />
        <Text fontWeight={"bold"} ml={4} fontSize={23}>
          WFRM
        </Text>
      </Flex>
    </>
  );
};

export default NavbarLogo;
