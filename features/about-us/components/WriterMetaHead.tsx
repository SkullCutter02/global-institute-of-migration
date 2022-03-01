import React from "react";
import { TypeOf } from "@directus/sdk";

import HOST from "../../../constants/host";
import Head from "next/head";
import { DirectusCollections } from "../../../generated/directus";

interface Props {
  writer: Partial<TypeOf<DirectusCollections, "writers">>;
}

const WriterMetaHead: React.FC<Props> = ({ writer }) => {
  return (
    <>
      <Head>
        <title key={"title"}>{writer.name}</title>
        <meta name={"description"} content={writer.bio} key={"description"} />
        <meta name={"robots"} content={"index, nofollow"} key={"robots"} />
        <meta property={"og:title"} content={writer.name} key={"og:title"} />
        <meta property={"og:description"} content={writer.bio} key={"og:description"} />
        <meta property={"og:type"} content={"article"} key={"og:type"} />
        <meta
          property={"og:url"}
          content={`${process.env.NEXT_PUBLIC_URL}/writers/${writer.id}`}
          key={"og:url"}
        />
        <meta property={"og:image"} content={`${HOST}/assets/${writer.image}`} key={"og:image"} />
        <meta property={"twitter:title"} content={writer.name} key={"twitter:title"} />
        <meta property={"twitter:description"} content={writer.bio} key={"twitter:description"} />
        <meta
          property={"twitter:url"}
          content={`${process.env.NEXT_PUBLIC_URL}/writers/${writer.id}`}
          key={"twitter:url"}
        />
        <meta property={"twitter:image"} content={`${HOST}/assets/${writer.image}`} key={"twitter:image"} />
      </Head>
    </>
  );
};

export default WriterMetaHead;
