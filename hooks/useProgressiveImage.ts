import React, { useEffect } from "react";

const useProgressiveImage = (lowQualitySrc: string, highQualitySrc: string, isInView: boolean = null) => {
  const [src, setSrc] = React.useState(lowQualitySrc);

  useEffect(() => {
    if (isInView === null || isInView) {
      setSrc(lowQualitySrc);

      const img = new Image();

      img.src = highQualitySrc;

      img.onload = () => {
        setSrc(highQualitySrc);
      };
    }
  }, [lowQualitySrc, highQualitySrc, isInView]);

  return { src, blur: src === lowQualitySrc };
};

export default useProgressiveImage;
