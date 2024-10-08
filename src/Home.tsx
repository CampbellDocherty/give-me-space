import { useState, useEffect } from 'react';
import { homeImages } from './assets/home';
import { ImageContainer } from './styles';
import { useLoadImages } from './useLoadImages';

export const Home = ({ isSmallerScreen }: { isSmallerScreen: boolean }) => {
  const [imageToShow, setImageToShow] = useState(0);
  const loadedImages = useLoadImages(homeImages);

  useEffect(() => {
    if (isSmallerScreen) {
      const interval = setInterval(() => {
        setImageToShow((prev) => {
          if (prev === loadedImages.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [loadedImages]);

  if (isSmallerScreen) {
    return (
      <ImageContainer $isSmallerScreen={isSmallerScreen}>
        {loadedImages.length > 0 && (
          <img src={loadedImages[imageToShow].src} alt={`${imageToShow}`} />
        )}
      </ImageContainer>
    );
  }

  return (
    <ImageContainer>
      <img src={homeImages[0]} alt={'one'} />
      <img src={homeImages[1]} alt={'two'} />
      <img src={homeImages[2]} alt={'three'} />
    </ImageContainer>
  );
};
