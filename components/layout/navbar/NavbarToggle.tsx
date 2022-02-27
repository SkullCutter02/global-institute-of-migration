import React, { Dispatch, SetStateAction } from "react";
import { Box } from "@chakra-ui/react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const NavbarToggle: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Box display={{ base: "block", md: "none" }} onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? (
          <IoCloseSharp cursor={"pointer"} size={30} />
        ) : (
          <GiHamburgerMenu cursor={"pointer"} size={25} />
        )}
      </Box>
    </>
  );
};

export default NavbarToggle;
