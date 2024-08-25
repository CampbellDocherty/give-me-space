import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { styled } from 'styled-components';
import { fadeInBottom } from './animations';
import { pressImages } from './assets/press';

const CarouselContainer = styled.div`
  transition: ${fadeInBottom} 1s ease-out;
`;

export const Press = ({ isSmallerScreen }: { isSmallerScreen: boolean }) => {
  return (
    <CarouselContainer>
      <Carousel
        autoPlay
        transitionTime={1000}
        interval={3000}
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        width={isSmallerScreen ? '100%' : '70%'}
      >
        {pressImages.map((image, index) => (
          <img key={index} src={image} alt={`${index}`} />
        ))}
      </Carousel>
    </CarouselContainer>
  );
};
