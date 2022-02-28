import React from "react";
import { TypeOf } from "@directus/sdk";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Image, Table } from "@chakra-ui/react";

import { DirectusCollections } from "../../../generated/directus";

interface Props {
  article: Partial<TypeOf<DirectusCollections, "articles">>;
}

const theme = {
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
