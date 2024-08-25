import { useState, useEffect } from 'react';
import { homeImages } from './assets/home';
import { ImageContainer } from './styles';
import { useLoadImages } from './useLoadImages';

export const Home = () => {
  const [imageToShow, setImageToShow] = useState(0);
  const loadedImages = useLoadImages(homeImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageToShow((prev) => {
        if (prev === loadedImages.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [homeImages]);
  return (
    <ImageContainer>
      {loadedImages.length > 0 && (
        <img src={loadedImages[imageToShow].src} alt={`${imageToShow}`} />
      )}
    </ImageContainer>
  );
};
