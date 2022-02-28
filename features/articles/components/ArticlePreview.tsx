import React from "react";
import { TypeOf } from "@directus/sdk";
import { Box, Heading, Image, Text, Flex } from "@chakra-ui/react";

import { DirectusCollections } from "../../../generated/directus";
import HOST from "../../../constants/host";
import formatMediaDate from "../../../utils/formatMediaDate";
import markdownToPlainText from "../../../utils/markdownToPlainText";

interface Props {
  article: Partial<TypeOf<DirectusCollections, "articles">>;
}

const ArticlePreview: React.FC<Props> = ({ article }) => {
  return (
    <>
      <Flex
        as={"article"}
        w={"100%"}
        key={article.id}
        justifyContent={"space-between"}
        alignItems={"stretch"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Image
          src={`${HOST}/assets/${article.main_article_image}`}
          objectFit={"cover"}
          w={{ base: "100%", md: "35%" }}
        />
        {typeof article.author !== "string" && (
          <Box ml={{ base: 0, md: 12 }} mt={{ base: 12, md: 0 }} w={{ base: "100%", md: "65%" }}>
            <Text textStyle={"information"} mb={4}>
              {article.author.name}
            </Text>
            <Heading
              textTransform={"capitalize"}
              cursor={"pointer"}
              fontSize={{ base: 23, md: 27 }}
              fontWeight={700}
            >
              {article.heading}
            </Heading>
            <Text textStyle={"large-description"} mb={4}>
              {article.subheading}
            </Text>
            <Text
              fontFamily={"secondary"}
              w={"100%"}
              color={"gray.500"}
              fontWeight={"light"}
              noOfLines={3}
              mb={4}
            >
              {markdownToPlainText(article.body)}
            </Text>
            <Text textStyle={"information"}>
              {formatMediaDate(article.created_at, { includeYear: true })}
            </Text>
          </Box>
        )}
      </Flex>
    </>
  );
};

export default ArticlePreview;
