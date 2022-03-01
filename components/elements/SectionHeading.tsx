import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  heading: string;
  hasViewAll?: boolean;
  to?: string;
}

const SectionHeading: React.FC<Props> = ({ heading, hasViewAll = false, to }) => {
  return (
    <>
      <Flex
        borderY={"3px solid"}
        borderColor={"gray.300"}
        alignItems={"center"}
        justifyContent={"space-between"}
        pb={4}
        pt={5}
      >
        <Heading fontWeight={800} color={"primary"}>
          {heading}
        </Heading>
        {hasViewAll && (
          <Link href={to}>
            <Text
              fontSize={18}
              fontFamily={"secondary"}
              fontWeight={800}
              cursor={"pointer"}
              color={"gray.500"}
            >
              View All
            </Text>
          </Link>
        )}
      </Flex>
    </>
  );
};

export default SectionHeading;
