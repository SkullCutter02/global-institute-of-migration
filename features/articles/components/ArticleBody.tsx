import React from "react";
import { TypeOf } from "@directus/sdk";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Image, OrderedList, Table, UnorderedList, Link, Text } from "@chakra-ui/react";

import { DirectusCollections } from "../../../generated/directus";

interface Props {
  article: Partial<TypeOf<DirectusCollections, "articles">>;
}

const theme = {
  p: ({ children, ...props }) => (
    <Text my={5} {...props}>
      {children}
    </Text>
  ),
  img: ({ children, ...props }) => (
    <Image w={"100%"} my={14} {...props}>
      {children}
    </Image>
  ),
  table: ({ children, ...props }) => (
    <Table my={7} {...props}>
      {children}
    </Table>
  ),
  ul: ({ children, ...props }) => (
    <UnorderedList my={5} {...props}>
      {children}
    </UnorderedList>
  ),
  ol: ({ children, ...props }) => (
    <OrderedList my={5} {...props}>
      {children}
    </OrderedList>
  ),
  a: ({ children, ...props }) => (
    <Link {...props} color={"blue.500"} target={"_blank"}>
      {children}
    </Link>
  ),
};

const ArticleBody: React.FC<Props> = ({ article }) => {
  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={ChakraUIRenderer(theme)}
        children={article.body}
        skipHtml
      />
    </>
  );
};

export default ArticleBody;
