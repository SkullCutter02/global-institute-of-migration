import React from "react";
import { Center } from "@chakra-ui/react";

import LogoWithText from "../../elements/LogoWithText";

const Footer: React.FC = () => {
  return (
    <>
      <Center as={"footer"} bg={"black"} w={"100vw"} h={"200px"}>
        <LogoWithText />
      </Center>
    </>
  );
};

export default Footer;
