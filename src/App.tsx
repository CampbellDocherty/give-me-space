import { Container, ImageContainer, Link, Links, Logo } from './styles';
import logo from './assets/logo.jpeg';
import firstImage from './assets/1.jpeg';
import secondImage from './assets/2.jpeg';
import thirdImage from './assets/3.jpeg';
import { useState } from 'react';

enum Routes {
  HOME = 'home',
  ABOUT = 'about',
}

const App = () => {
  const [route, setRoute] = useState(Routes.HOME);

  return (
    <>
      <Logo src={logo} alt="logo" />
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
          <img src={firstImage} alt="first" />
          <img src={secondImage} alt="second" />
          <img src={thirdImage} alt="third" />
        </ImageContainer>
      </Container>
    </>
  );
};

export default App;
