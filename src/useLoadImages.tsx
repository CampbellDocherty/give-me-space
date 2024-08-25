import { useEffect, useRef, useState } from 'react';

export const useLoadImages = (imageSrc: ReadonlyArray<string>) => {
  const [loadedImages, setLoadedImages] = useState<
    ReadonlyArray<HTMLImageElement>
  >([]);
  const loadedSrcSet = useRef(new Set()); // Track loaded sources

  useEffect(() => {
    imageSrc.forEach((src) => {
      if (loadedSrcSet.current.has(src)) {
        return;
      }

      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedSrcSet.current.add(src); // Mark this src as loaded
        setLoadedImages((prev) => [...prev, img]);
      };
    });
  }, [imageSrc]);

  return loadedImages;
};
