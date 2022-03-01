import React from "react";
import { TypeOf } from "@directus/sdk";
import Head from "next/head";

import { DirectusCollections } from "../../../generated/directus";
import capitaliseEveryWord from "../../../utils/capitaliseEveryWord";
import HOST from "../../../constants/host";

interface Props {
  video: Partial<TypeOf<DirectusCollections, "videos">>;
}

const VideoMetaHead: React.FC<Props> = ({ video }) => {
  return (
    <>
      <Head>
        <title key={"title"}>{capitaliseEveryWord(video.title)}</title>
        <meta name={"description"} content={video.description} key={"description"} />
        <meta name={"robots"} content={"index, nofollow"} key={"robots"} />
        <meta property={"og:title"} content={capitaliseEveryWord(video.title)} key={"og:title"} />
        <meta property={"og:description"} content={video.description} key={"og:description"} />
        <meta property={"og:type"} content={"video"} key={"og:type"} />
        <meta
          property={"og:url"}
          content={`${process.env.NEXT_PUBLIC_URL}/videos/${video.id}`}
          key={"og:url"}
        />
        <meta property={"og:image"} content={`${HOST}/assets/${video.thumbnail}`} key={"og:image"} />
        <meta property={"twitter:title"} content={capitaliseEveryWord(video.title)} key={"twitter:title"} />
        <meta property={"twitter:description"} content={video.description} key={"twitter:description"} />
        <meta
          property={"twitter:url"}
          content={`${process.env.NEXT_PUBLIC_URL}/videos/${video.id}`}
          key={"twitter:url"}
        />
        <meta
          property={"twitter:image"}
          content={`${HOST}/assets/${video.thumbnail}`}
          key={"twitter:image"}
        />
      </Head>
    </>
  );
};

export default VideoMetaHead;
