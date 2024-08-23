import { Container, ImageContainer, Link, Links, Logo } from './styles';
import logo from './assets/logo.jpeg';
import firstImage from './assets/1.jpeg';
import secondImage from './assets/2.jpeg';
import thirdImage from './assets/3.jpeg';
import { useEffect, useState } from 'react';

enum Routes {
  HOME = 'home',
  ABOUT = 'about',
}

const App = () => {
  const [route, setRoute] = useState(Routes.HOME);
  const [isSmallerScreen, setIsSmallerScreen] = useState(
    window.innerWidth < 768
  );
  const images = [
    { src: firstImage, alt: 'first' },
    { src: secondImage, alt: 'second' },
    { src: thirdImage, alt: 'third' },
  ];
  const [imageToShow, setImageToShow] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setIsSmallerScreen(true);
      } else {
        setIsSmallerScreen(false);
      }
    });

    return () => {
      window.removeEventListener('resize', () => {
        if (window.innerWidth < 768) {
          setIsSmallerScreen(true);
        } else {
          setIsSmallerScreen(false);
        }
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageToShow((prev) => {
        if (prev === images.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Logo src={logo} alt="logo" onClick={() => setRoute(Routes.HOME)} />
      {!isSmallerScreen ? (
        <Container>
          <Links>
            <Link
              onClick={() => setRoute(Routes.HOME)}
              $selected={route === Routes.HOME}
            >
              Home
            </Link>
            <Link
              onClick={() => setRoute(Routes.ABOUT)}
              $selected={route === Routes.ABOUT}
            >
              About
            </Link>
          </Links>

          <ImageContainer>
            {images.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </ImageContainer>
        </Container>
      ) : (
        <>
          <Links $isSmallerScreen={isSmallerScreen}>
            <Link
              onClick={() => setRoute(Routes.HOME)}
              $selected={route === Routes.HOME}
            >
              Home
            </Link>
            <Link
              onClick={() => setRoute(Routes.ABOUT)}
              $selected={route === Routes.ABOUT}
            >
              About
            </Link>
          </Links>
          <Container $isSmallerScreen={isSmallerScreen}>
            <ImageContainer>
              <img
                src={images[imageToShow].src}
                alt={images[imageToShow].alt}
              />
            </ImageContainer>
          </Container>
        </>
      )}
    </>
  );
};

export default App;
