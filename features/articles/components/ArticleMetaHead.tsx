import React from "react";
import { TypeOf } from "@directus/sdk";
import Head from "next/head";

import { DirectusCollections } from "../../../generated/directus";
import HOST from "../../../constants/host";
import capitaliseEveryWord from "../../../utils/capitaliseEveryWord";

interface Props {
  article: Partial<TypeOf<DirectusCollections, "articles">>;
}

const ArticleMetaHead: React.FC<Props> = ({ article }) => {
  return (
    <>
      <Head>
        <title>{capitaliseEveryWord(article.heading)}</title>
        <meta name={"description"} content={article.subheading} />
        <meta name={"robots"} content={"index, nofollow"} />
        <meta property={"og:title"} content={capitaliseEveryWord(article.heading)} />
        <meta property={"og:type"} content={"article"} />
        <meta property={"og:url"} content={`${process.env.NEXT_PUBLIC_URL}/articles/${article.id}`} />
        <meta property={"og:image"} content={`${HOST}/assets/${article.main_article_image}`} />
        <meta property={"twitter:title"} content={capitaliseEveryWord(article.heading)} />
        <meta property={"twitter:description"} content={article.subheading} />
        <meta property={"twitter:url"} content={`${process.env.NEXT_PUBLIC_URL}/articles/${article.id}`} />
        <meta property={"twitter:image"} content={`${HOST}/assets/${article.main_article_image}`} />
      </Head>
    </>
  );
};

export default ArticleMetaHead;
