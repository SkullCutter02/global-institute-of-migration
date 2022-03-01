import React from "react";
import ProgImage from "react-progressive-image";
import { Image, ImageProps } from "@chakra-ui/react";

import HOST from "../../constants/host";

interface Props extends ImageProps {
  fromMarkdown?: boolean;
}

const ProgressiveImage: React.FC<Props> = ({ src, fromMarkdown = false, ...props }) => {
  return (
    <>
      <ProgImage
        placeholder={fromMarkdown ? `${src}?width=50&quality=1` : `${HOST}/assets/${src}?width=50&quality=1`}
        src={fromMarkdown ? src : `${HOST}/assets/${src}`}
      >
        {(src: string, isLoading: boolean) => (
          <Image src={src} filter={isLoading ? "blur(10px)" : "blur(0px)"} {...props} />
        )}
      </ProgImage>
    </>
  );
};

export default ProgressiveImage;
