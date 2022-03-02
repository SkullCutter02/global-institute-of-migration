import React, { useRef } from "react";
import { ImageProps, AspectRatio } from "@chakra-ui/react";
import Image from "next/image";

import HOST from "../../constants/host";

interface Props extends ImageProps {
  fromMarkdown?: boolean;
  aspectRatio?: number;
  isCircle?: boolean;
}

const ProgressiveImage: React.FC<Props> = ({
  src,
  fromMarkdown = false,
  aspectRatio = 16 / 9,
  isCircle = false,
  ...props
}) => {
  return (
    <>
      <AspectRatio {...props} ratio={aspectRatio} maxW={props.w}>
        <Image
          src={fromMarkdown ? `${src}?format=webp` : `${HOST}/assets/${src}?format=webp`}
          placeholder={"blur"}
          blurDataURL={"/bg.png"}
          layout={"fill"}
          objectFit={"cover"}
        />
      </AspectRatio>
    </>
  );
};

export default ProgressiveImage;
