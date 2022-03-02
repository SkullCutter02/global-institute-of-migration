const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    domains: [process.env.NEXT_PUBLIC_HOST?.replace("https://", "") || "localhost"],
  },
});
