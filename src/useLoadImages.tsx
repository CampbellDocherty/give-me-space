import { useState, useEffect } from 'react';

export const useLoadImages = (imageSrc: ReadonlyArray<string>) => {
  const [loadedImages, setLoadedImages] = useState<
    ReadonlyArray<HTMLImageElement>
  >([]);

  useEffect(() => {
    imageSrc.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prevImages) => [...prevImages, img]);
      };
    });
  }, []);

  return loadedImages;
};
