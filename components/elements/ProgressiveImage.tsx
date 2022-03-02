import React, { useRef } from "react";
import { ImageProps, AspectRatio, Skeleton } from "@chakra-ui/react";
import Image from "next/image";

import HOST from "../../constants/host";
import useProgressiveImage from "../../hooks/useProgressiveImage";
import useIntersection from "../../hooks/useIntersection";

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
  const imgRef = useRef<HTMLImageElement>(null);

  // const { isInView } = useIntersection(imgRef);

  // const { src: imgSrc, isImageLoading } = useProgressiveImage(
  //   fromMarkdown ? src : `${HOST}/assets/${src}?format=webp`,
  //   isInView
  // );

  return (
    <>
      <AspectRatio {...props} ratio={aspectRatio} maxW={props.w}>
        {/*{isImageLoading ? (*/}
        {/*  <Skeleton ref={imgRef} w={"100%"} h={"100%"} />*/}
        {/*) : (*/}
        <Image
          src={fromMarkdown ? `${src}?format=webp` : `${HOST}/assets/${src}?format=webp`}
          placeholder={"blur"}
          blurDataURL={
            fromMarkdown
              ? `${src}?format=webp&width=30&quality=1`
              : `${HOST}/assets/${src}?format=webp&width=30&quality=1`
          }
          layout={"fill"}
          objectFit={"cover"}
        />
        {/*)}*/}
      </AspectRatio>
    </>
  );
};

export default ProgressiveImage;
