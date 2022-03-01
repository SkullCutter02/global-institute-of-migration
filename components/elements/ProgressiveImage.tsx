import React from "react";
import { Image, ImageProps, AspectRatio } from "@chakra-ui/react";

import HOST from "../../constants/host";
import useProgressiveImage from "../../hooks/useProgressiveImage";

interface Props extends ImageProps {
  fromMarkdown?: boolean;
  aspectRatio?: number;
}

const ProgressiveImage: React.FC<Props> = ({ src, fromMarkdown = false, aspectRatio = 16 / 9, ...props }) => {
  const { src: imgSrc, blur: imgBlur } = useProgressiveImage(
    fromMarkdown ? `${src}?width=50&quality=1` : `${HOST}/assets/${src}?width=50&quality=1`,
    fromMarkdown ? src : `${HOST}/assets/${src}`
  );

  return (
    <>
      <AspectRatio {...props} ratio={aspectRatio} maxW={props.w}>
        <Image
          src={imgSrc}
          filter={imgBlur ? "blur(20px)" : "none"}
          transition={imgBlur ? "none" : "filter 0.3s ease-out"}
          clipPath={"inset(0)"}
          w={"100%"}
          h={"100%"}
        />
      </AspectRatio>
    </>
  );
};

export default ProgressiveImage;
