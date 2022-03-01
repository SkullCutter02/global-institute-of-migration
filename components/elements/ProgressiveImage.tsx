import React from "react";
import { Image, ImageProps } from "@chakra-ui/react";

import HOST from "../../constants/host";
import useProgressiveImage from "../../hooks/useProgressiveImage";

interface Props extends ImageProps {
  fromMarkdown?: boolean;
}

const ProgressiveImage: React.FC<Props> = ({ src, fromMarkdown = false, ...props }) => {
  const { src: imgSrc, blur: imgBlur } = useProgressiveImage(
    fromMarkdown ? `${src}?width=50&quality=1` : `${HOST}/assets/${src}?width=50&quality=1`,
    fromMarkdown ? src : `${HOST}/assets/${src}`
  );

  return (
    <>
      <Image
        src={imgSrc}
        filter={imgBlur ? "blur(20px)" : "none"}
        transition={imgBlur ? "none" : "filter 0.3s ease-out"}
        clipPath={"inset(0)"}
        {...props}
      />
    </>
  );
};

export default ProgressiveImage;
