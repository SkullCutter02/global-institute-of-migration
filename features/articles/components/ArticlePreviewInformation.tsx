import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { TypeOf } from "@directus/sdk";

import { DirectusCollections } from "../../../generated/directus";
import formatMediaDate from "../../../utils/formatMediaDate";

interface Props {
  article: Partial<TypeOf<DirectusCollections, "articles">>;
  big?: boolean;
}

const ArticlePreviewInformation: React.FC<Props> = ({ article, big = false }) => {
  return (
    <>
      {typeof article.author !== "string" && (
        <Flex justifyContent={"space-between"} my={3}>
          <Text
            color={"primary"}
            fontFamily={"secondary"}
            fontSize={big ? 18 : 14}
            textTransform={"uppercase"}
            fontWeight={700}
          >
            {article.category}
          </Text>
          <Box>
            <Text textStyle={big ? "big-information" : "information"}>
              {formatMediaDate(article.created_at)}, {article.author.name}
            </Text>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default ArticlePreviewInformation;
