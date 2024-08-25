import { styled } from 'styled-components';
import { fadeIn, fadeInBottom, fadeInLeft } from './animations';

export const Logo = styled.img`
  height: 5rem;
  cursor: pointer;
  animation: ${fadeIn} 1s ease-out;
  display: inline-block;
  margin: 1rem;
`;

export const Container = styled.div<{
  $isSmallerScreen?: boolean;
}>`
  width: 100%;
  display: flex;
  padding: ${({ $isSmallerScreen }) => ($isSmallerScreen ? '2rem 0' : '2rem')};
  gap: 8rem;
`;

const smallerScreenLinks = `
    display: flex;
    justify-content: center;
    gap: 1rem;
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    `;

export const Links = styled.div<{
  $isSmallerScreen?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${({ $isSmallerScreen }) => $isSmallerScreen && smallerScreenLinks}
`;

const strikeThrough = `
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    top: 53%;
    margin-top: -0.5px;
    background: #000;
  }

  &:after {
    right: 2.5px;
    background: #000;
    transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:hover:before {
    background: #000;
    width: 100%;
    transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:hover:after {
    background: transparent;
    width: 100%;
    transition: 0s;
  }
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
  text-decoration: ${({ $selected }) => ($selected ? 'line-through' : 'none')};

  ${({ $selected }) => !$selected && strikeThrough}
`;

export const ImageContainer = styled.div<{ $isSmallerScreen?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 60vh;
  flex: 1;
  max-width: ${({ $isSmallerScreen }) => ($isSmallerScreen ? '100%' : '80%')};
  overflow: hidden;
  flex-wrap: nowrap;

  animation: ${fadeInBottom} 1s ease-out;
  img {
    max-width: 100%;
    max-height: 100%;

    object-fit: cover;
  }
`;
