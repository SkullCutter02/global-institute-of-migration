import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";

interface Props {
  page: number;
  hasMore: boolean;
  to: string;
}

const PaginationButtons: React.FC<Props> = ({ page, hasMore, to }) => {
  return (
    <>
      <Flex w={"100%"} justifyContent={"space-between"}>
        <Link href={`${to}?page=${page - 1}`}>
          <Button
            bg={"white"}
            disabled={page === 1}
            boxShadow={"lg"}
            leftIcon={<BsArrowLeft />}
            _hover={{ bg: "white" }}
          >
            Previous Page
          </Button>
        </Link>
        <Link href={`${to}?page=${page + 1}`}>
          <Button
            bg={"white"}
            disabled={!hasMore}
            boxShadow={"lg"}
            rightIcon={<BsArrowRight />}
            _hover={{ bg: "white" }}
          >
            Next Page
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default PaginationButtons;
