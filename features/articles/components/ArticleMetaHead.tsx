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
        <title key={"title"}>{capitaliseEveryWord(article.heading)}</title>
        <meta name={"description"} content={article.subheading} key={"description"} />
        <meta name={"robots"} content={"index, nofollow"} key={"robots"} />
        <meta property={"og:title"} content={capitaliseEveryWord(article.heading)} key={"og:title"} />
        <meta property={"og:description"} content={article.subheading} key={"og:description"} />
        <meta property={"og:type"} content={"article"} key={"og:type"} />
        <meta
          property={"og:url"}
          content={`${process.env.NEXT_PUBLIC_URL}/articles/${article.id}`}
          key={"og:url"}
        />
        <meta
          property={"og:image"}
          content={`${HOST}/assets/${article.main_article_image}`}
          key={"og:image"}
        />
        <meta
          property={"twitter:title"}
          content={capitaliseEveryWord(article.heading)}
          key={"twitter:title"}
        />
        <meta property={"twitter:description"} content={article.subheading} key={"twitter:description"} />
        <meta
          property={"twitter:url"}
          content={`${process.env.NEXT_PUBLIC_URL}/articles/${article.id}`}
          key={"twitter:url"}
        />
        <meta
          property={"twitter:image"}
          content={`${HOST}/assets/${article.main_article_image}`}
          key={"twitter:image"}
        />
      </Head>
    </>
  );
};

export default ArticleMetaHead;
