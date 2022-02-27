import React from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  to: string;
}

const NavbarText: React.FC<Props> = ({ children, to: href }) => {
  return (
    <>
      <Link href={href}>
        <Text cursor={"pointer"} fontSize={18}>
          {children}
        </Text>
      </Link>
    </>
  );
};

export default NavbarText;
