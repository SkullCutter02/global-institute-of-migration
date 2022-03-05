import React from "react";
import { Wrap } from "@chakra-ui/react";

const TeamGrid: React.FC = ({ children }) => {
  return (
    <>
      <Wrap spacing={{ base: 6, sm: 14, md: 12, lg: 16 }} spacingY={8} justify={"center"}>
        {children}
      </Wrap>
    </>
  );
};

export default TeamGrid;
