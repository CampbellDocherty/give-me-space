import { styled } from 'styled-components';
import { fadeIn, fadeInBottom, fadeInLeft } from './animations';

export const Logo = styled.img`
  height: 5rem;
  cursor: pointer;
  animation: ${fadeIn} 1s ease-out;
  display: inline-block;
  align-self: flex-start;
`;

export const Container = styled.div<{
  $isSmallerScreen?: boolean;
}>`
  width: 100%;
  display: flex;
  padding: 0;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  align-items: flex-end;
  margin-bottom: 1rem;
`;

const smallerScreenLinks = `
    
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    margin-right: 0;
    `;

export const Links = styled.div<{
  $isSmallerScreen?: boolean;
}>`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-right: 4rem;
  ${({ $isSmallerScreen }) => $isSmallerScreen && smallerScreenLinks}
`;

export const Link = styled.p<{ $selected: boolean }>`
  cursor: pointer;
  margin: 0;
  font-size: 24px;
  position: relative;

  &:nth-child(1) {
    animation: ${fadeInLeft} 0.6s ease-out;
  }
  animation: ${fadeInLeft} 1s ease-out;
  text-decoration: ${({ $selected }) => ($selected ? 'underline' : 'none')};

  &:hover {
    text-decoration: underline;
  }
`;

export const ImageContainer = styled.div<{ $isSmallerScreen?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  flex: 1;
  height: 80vh;
  max-width: 100%;
  overflow: hidden;
  flex-wrap: nowrap;

  animation: ${fadeInBottom} 1s ease-out;
  img {
    width: ${({ $isSmallerScreen }) => ($isSmallerScreen ? '100%' : '33.33%')};
    height: 100%;
    object-fit: cover;
  }
`;
