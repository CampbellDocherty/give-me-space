import { keyframes, styled } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0
    }
    
    to {
        opacity: 1;
    }
    `;

export const Logo = styled.img`
  height: 14rem;
  cursor: pointer;
  animation: ${fadeIn} 1s ease-out;
`;

export const Container = styled.div<{
  $isSmallerScreen?: boolean;
}>`
  width: 100%;
  display: flex;
  padding: ${({ $isSmallerScreen }) => ($isSmallerScreen ? '0' : '2rem')};
  gap: 8rem;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 4rem;
`;

const fadeInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    
    to {
        opacity: 1;
        transform: translateX(0);
    }
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

const fadeInBottom = keyframes`
    from {
        opacity: 0;
        transform: translateY(80px);
    }
    
    to {
        opacity: 1;
        transform: translateY(0);
    }
    `;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  max-width: 100vw;

  img {
    height: 100%;
    width: 100%;

    &:nth-child(1) {
      animation: ${fadeInBottom} 1s ease-out;
    }
    &:nth-child(2) {
      animation: ${fadeInBottom} 1.5s ease-out;
    }
    &:nth-child(3) {
      animation: ${fadeInBottom} 2s ease-out;
    }
  }
`;
