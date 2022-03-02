import React, { useRef } from "react";
import { Image, ImageProps, AspectRatio, Skeleton } from "@chakra-ui/react";

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

  const { isInView } = useIntersection(imgRef);

  const { src: imgSrc, isImageLoading } = useProgressiveImage(
    fromMarkdown ? src : `${HOST}/assets/${src}`,
    isInView
  );

  return (
    <>
      <AspectRatio {...props} ratio={aspectRatio} maxW={props.w}>
        {isImageLoading ? (
          <Skeleton ref={imgRef} w={"100%"} h={"100%"} />
        ) : (
          <Image src={imgSrc} w={"100%"} h={"100%"} />
        )}
      </AspectRatio>
    </>
  );
};

export default ProgressiveImage;
