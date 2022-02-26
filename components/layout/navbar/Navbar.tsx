import React from "react";
import { Center, HStack } from "@chakra-ui/react";

import NavbarText from "./NavbarText";
import NavbarLogo from "./NavbarLogo";

const Navbar: React.FC = () => {
  return (
    <>
      <Center color={"white"} as={"nav"} py={5} bg={"primary"} w={"100vw"} position={"relative"}>
        <HStack spacing={16}>
          <NavbarText>Home</NavbarText>
          <NavbarText>Articles</NavbarText>
          <NavbarText>Videos</NavbarText>
          <NavbarText>About Us</NavbarText>
        </HStack>
        <NavbarLogo />
      </Center>
    </>
  );
};

export default Navbar;
