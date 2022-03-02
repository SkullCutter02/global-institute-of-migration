import { useEffect, useState } from "react";

const useProgressiveImage = (highQualitySrc: string, isInView: boolean = null) => {
  const [src, setSrc] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isInView === null || isInView) {
      setIsImageLoading(true);

      const img = new Image();

      img.src = highQualitySrc;

      img.onload = () => {
        setIsImageLoading(false);
        setSrc(img.src);
      };
    }
  }, [highQualitySrc, isInView]);

  return { isImageLoading, src };
};

export default useProgressiveImage;
