import React from "react";
import { TypeOf } from "@directus/sdk";
import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";

import { DirectusCollections } from "../../../generated/directus";
import HOST from "../../../constants/host";
import formatMediaDate from "../../../utils/formatMediaDate";

interface Props {
  article: Partial<TypeOf<DirectusCollections, "articles">>;
}

const ArticlePreview: React.FC<Props> = ({ article }) => {
  return (
    <>
      <HStack
        as={"article"}
        w={"100%"}
        key={article.id}
        justifyContent={"space-between"}
        alignItems={"stretch"}
        spacing={12}
      >
        <Image src={`${HOST}/assets/${article.main_article_image}`} objectFit={"cover"} w={"35%"} />
        {typeof article.author !== "string" && (
          <Box w={"65%"}>
            <Text textStyle={"information"} mb={4}>
              {article.author.name}
            </Text>
            <Heading cursor={"pointer"} fontSize={{ base: 23, md: 27 }} fontWeight={500}>
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
              {article.body}
            </Text>
            <Text textStyle={"information"}>
              {formatMediaDate(article.created_at, { includeYear: true })}
            </Text>
          </Box>
        )}
      </HStack>
    </>
  );
};

export default ArticlePreview;
