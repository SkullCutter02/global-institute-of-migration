import React from "react";
import { ImageProps } from "next/image";
import ProgImage from "react-progressive-image";
import { Image } from "@chakra-ui/react";

import HOST from "../../constants/host";

interface Props extends Partial<ImageProps> {
  imageId: string;
}

const ProgressiveImage: React.FC<Props> = ({ imageId }) => {
  return (
    <>
      <ProgImage placeholder={`${HOST}/assets/${imageId}?width=100`} src={`${HOST}/assets/${imageId}`}>
        {(src: string, loading: boolean) => (
          <Image
            src={src}
            filter={loading ? "blur(10px)" : null}
            transition={"filter 300ms ease"}
            w={"100%"}
          />
        )}
      </ProgImage>
    </>
  );
};

export default ProgressiveImage;
