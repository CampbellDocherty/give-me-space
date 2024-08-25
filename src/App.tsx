import { useEffect, useState } from 'react';
import logo from './assets/logo.jpeg';
import { Container, Link, Links, Logo } from './styles';
import { Home } from './Home';
import { Press } from './Press';

enum Routes {
  HOME = 'home',
  PRESS = 'press',
}

const App = () => {
  const [route, setRoute] = useState(Routes.HOME);
  const [isSmallerScreen, setIsSmallerScreen] = useState(
    window.innerWidth < 768
  );

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
            onClick={() => setRoute(Routes.PRESS)}
            $selected={route === Routes.PRESS}
          >
            Press
          </Link>
        </Links>

        {route === Routes.HOME && <Home />}
        {route === Routes.PRESS && <Press />}
      </Container>
    </>
  );
};

export default App;
