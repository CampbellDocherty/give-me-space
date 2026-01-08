import { styled } from 'styled-components';
import { fadeInBottom } from './animations';
import aboutBackground from './assets/about-background.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: ${fadeInBottom} 1s ease-out;
  padding: 0 12px;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  z-index: -1;
  opacity: 0.3;
`;

const Title = styled.p`
  font-size: 36pt;
  margin: 0;
  text-align: center;
  margin-bottom: 36px;
`;

const SectionHeader = styled.p`
  font-size: 16pt;
  font-weight: 600;
  margin: 0;
`;

const SectionStart = styled.p`
  font-size: 15pt;
  margin-top: 0;
  margin-bottom: 18px;
`;

export const About = ({ isSmallerScreen }: { isSmallerScreen: boolean }) => {
  return (
    <Container>
      {!isSmallerScreen && (
        <BackgroundImage
          src={aboutBackground}
          alt="blue abstract painting of a figure"
        />
      )}
      <Title>About Give Me Space</Title>
      <SectionStart>
        ‘Give Me Space’ workshops were set up by Cressida Brotherstone (art
        therapist) and Harley Weir (photographer) to provide inclusive and
        accessible art therapy to young people.
      </SectionStart>
      <SectionStart>
        Young People between ages 16-25 will work alongside artists and
        designers with the support of an art therapist.
      </SectionStart>
      <SectionHeader>Why are we doing this?</SectionHeader>
      <SectionStart>
        Through working in psychiatric, community and educational settings it’s
        become clear that creative therapies, and creative subjects are always
        fighting for space and value - especially in the state sector. The
        project will prioritise those who are typically excluded from existing
        opportunities due to financial and/or cultural barriers, limitations in
        the current educational system and lack of specialised support.
      </SectionStart>
      <SectionStart>
        The project hopes to expose both artists, young people, and therapists
        to new ways of communicating with each other. The artists involved
        wouldn’t usually link up with an art therapist, or young influential
        minds, so there will be strong emphasis on collaboration throughout.
      </SectionStart>
      <SectionStart>
        The groups will take place across different inner city venues to deliver
        a series of workshops in the most suitable environment.
      </SectionStart>
      <SectionStart>
        The workshops will include textile and furniture design, filmmaking,
        animation, photography, ceramics, woodwork and more! There will be less
        emphasis on results, more on the importance of the creative process, and
        the ability it has to heal, regulate and build self-esteem.
      </SectionStart>
      <SectionStart style={{ marginTop: 18 }}>
        ‘Give Me Space’ will support young people to realise their unique
        potential...Because we all deserve a creative future!
      </SectionStart>
    </Container>
  );
};
