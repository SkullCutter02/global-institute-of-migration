import React from "react";
import { Text } from "@chakra-ui/react";

const NavbarText: React.FC = ({ children }) => {
  return (
    <>
      <Text cursor={"pointer"} fontSize={18}>
        {children}
      </Text>
    </>
  );
};

export default NavbarText;
