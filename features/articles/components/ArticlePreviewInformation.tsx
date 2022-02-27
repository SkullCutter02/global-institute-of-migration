import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { TypeOf } from "@directus/sdk";

import { DirectusCollections } from "../../../generated/directus";
import formatMediaDate from "../../../utils/formatMediaDate";

interface Props {
  article: Partial<TypeOf<DirectusCollections, "articles">>;
}

const ArticlePreviewInformation: React.FC<Props> = ({ article }) => {
  return (
    <>
      {typeof article.author !== "string" && (
        <Flex justifyContent={"space-between"} my={3}>
          <Text textStyle={"information"}>{formatMediaDate(article.created_at)}</Text>
          <Text textStyle={"information"}>{article.author.name}</Text>
        </Flex>
      )}
    </>
  );
};

export default ArticlePreviewInformation;
