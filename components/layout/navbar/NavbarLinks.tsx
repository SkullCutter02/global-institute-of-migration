import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import NavbarText from "./NavbarText";

const NavbarLinks: React.FC = () => {
  return (
    <>
      <Box display={"block"} flexBasis={{ base: "100%", md: "auto" }}>
        <Stack
          spacing={10}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[8, 8, 0, 0]}
        >
          <NavbarText to={"/"}>Home</NavbarText>
          <NavbarText to={"/articles?page=1"}>Articles</NavbarText>
          <NavbarText to={"/videos?page=1"}>Videos</NavbarText>
          <NavbarText to={"/about-us"}>About Us</NavbarText>
        </Stack>
      </Box>
    </>
  );
};

export default NavbarLinks;
