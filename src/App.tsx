import { useEffect, useState } from 'react';
import logo from './assets/logo.jpeg';
import { Container, Header, Link, Links, Logo } from './styles';
import { Home } from './Home';
import { Press } from './Press';
import { About } from './About';

enum Routes {
  HOME = 'home',
  ABOUT = 'about',
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
      <Header>
        <Logo src={logo} alt="logo" onClick={() => setRoute(Routes.HOME)} />
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
          <Link
            onClick={() => setRoute(Routes.PRESS)}
            $selected={route === Routes.PRESS}
          >
            Press
          </Link>
        </Links>
      </Header>
      <Container $isSmallerScreen={isSmallerScreen}>
        {route === Routes.HOME && <Home isSmallerScreen={isSmallerScreen} />}
        {route === Routes.ABOUT && <About isSmallerScreen={isSmallerScreen} />}
        {route === Routes.PRESS && <Press isSmallerScreen={isSmallerScreen} />}
      </Container>
    </>
  );
};

export default App;
