import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import logo from "../../../public/logo.png";

const NavbarLogo: React.FC = () => {
  return (
    <>
      <Flex
        alignItems={"center"}
        cursor={"pointer"}
        position={"absolute"}
        top={"50%"}
        left={"0"}
        transform={"translate(20%, -50%)"}
      >
        <Image src={logo} layout={"fixed"} />
        <Text fontWeight={"bold"} ml={4} fontSize={23}>
          WFRM
        </Text>
      </Flex>
    </>
  );
};

export default NavbarLogo;
