import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";

import LogoWithText from "../../elements/LogoWithText";
import NavbarLinks from "./NavbarLinks";
import NavbarToggle from "./NavbarToggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Flex
        color={"white"}
        as={"nav"}
        p={8}
        bg={"primary"}
        w={"100vw"}
        justify={"space-between"}
        wrap={"wrap"}
        align={"center"}
        maxH={{ base: isOpen ? "400px" : "100px", sm: isOpen ? "150px" : "100px", md: "max-content" }}
        transition={{ base: "max-height 0.3s ease-in-out", sm: "max-height 0.2s ease-in-out", md: null }}
        overflowY={"hidden"}
      >
        <LogoWithText />
        <NavbarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavbarLinks />
      </Flex>
    </>
  );
};

export default Navbar;
