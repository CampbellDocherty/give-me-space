import { useEffect, useState } from 'react';
import { homeImages } from './assets/home';
import logo from './assets/logo.jpeg';
import { Container, ImageContainer, Link, Links, Logo } from './styles';

enum Routes {
  HOME = 'home',
  ABOUT = 'about',
}

const App = () => {
  const [route, setRoute] = useState(Routes.HOME);
  const [loadedImages, setLoadedImages] = useState<
    ReadonlyArray<HTMLImageElement>
  >([]);
  const [isSmallerScreen, setIsSmallerScreen] = useState(
    window.innerWidth < 768
  );
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
    homeImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prevImages) => [...prevImages, img]);
      };
    });
  }, []);

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
    <>
      <Logo src={logo} alt="logo" onClick={() => setRoute(Routes.HOME)} />
      <Container $isSmallerScreen={isSmallerScreen}>
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

        <ImageContainer>
          {loadedImages.length > 0 && (
            <img src={loadedImages[imageToShow].src} alt={'hey'} />
          )}
        </ImageContainer>
      </Container>
    </>
  );
};

export default App;
