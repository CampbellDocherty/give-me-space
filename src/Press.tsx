import { ImageContainer } from './styles';
import { pressImages } from './assets/press';
import { useLoadImages } from './useLoadImages';

export const Press = () => {
  const loadedImages = useLoadImages(pressImages);

  return (
    <ImageContainer>
      {loadedImages.map((image, index) => (
        <img key={index} src={image.src} alt={`${index}`} />
      ))}
    </ImageContainer>
  );
};
