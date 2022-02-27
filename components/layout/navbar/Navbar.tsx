import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";

import NavbarLogo from "./NavbarLogo";
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
        transition={{ base: "max-height 0.3s linear", sm: "max-height 0.2s linear", md: null }}
        overflowY={"hidden"}
      >
        <NavbarLogo />
        <NavbarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavbarLinks />
      </Flex>
    </>
  );
};

export default Navbar;
