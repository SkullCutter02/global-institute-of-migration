import React from "react";
import Head from "next/head";

const SITE_NAME = "The World Forum For Refugees And Migrants";
const SITE_DESCRIPTION = "We spread awarenss about migration issues globally.";

const GlobalHead: React.FC = () => {
  return (
    <>
      <Head>
        <title key={"title"}>{SITE_NAME}</title>
        <link rel="shortcut icon" href={"/logo.png"} />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_URL} key={"canonical"} />
        <meta name={"description"} content={SITE_DESCRIPTION} key={"description"} />
        <meta name={"robots"} content={"index, follow"} key={"robots"} />

        <meta property={"og:site_name"} content={SITE_NAME} key={"og:site_name"} />
        <meta property={"og:title"} content={SITE_NAME} key={"og:title"} />
        <meta property={"og:description"} content={SITE_DESCRIPTION} key={"og:description"} />
        <meta property={"og:type"} content={"website"} key={"og:type"} />
        <meta property={"og:url"} content={process.env.NEXT_PUBLIC_URL} key={"og:url"} />
        <meta property={"og:image"} content={"/full-logo.jpeg"} key={"og:image"} />

        <meta property={"twitter:title"} content={SITE_NAME} key={"twitter:title"} />
        <meta property={"twitter:description"} content={SITE_DESCRIPTION} key={"twitter:description"} />
        <meta property={"twitter:url"} content={process.env.NEXT_PUBLIC_URL} key={"twitter:url"} />
        <meta property={"twitter:image"} content={"/full-logo.jpeg"} key={"twitter:image"} />
        <meta name={"twitter:card"} content={"summary_large_image"} key={"twitter:card"} />
      </Head>
    </>
  );
};

export default GlobalHead;
