import styled, { keyframes } from 'styled-components';

const squareAnimation = keyframes`
  0%, 10.5% { left: 0; top: 0; }
  12.5%, 23% { left: 32px; top: 0; }
  25%, 35.5% { left: 64px; top: 0; }
  37.5%, 48% { left: 64px; top: 32px; }
  50%, 60.5% { left: 32px; top: 32px; }
  62.5%, 73% { left: 32px; top: 64px; }
  75%, 85.5% { left: 0; top: 64px; }
  87.5%, 98% { left: 0; top: 32px; }
  100% { left: 0; top: 0; }
`;

export const LoaderContainer = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderSquare = styled.div<{ delay: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  margin: 2px;
  background: white;
  animation: ${squareAnimation} 10s ease-in-out infinite both;
  animation-delay: ${({ delay }) => delay};
`;
