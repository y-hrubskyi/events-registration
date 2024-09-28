import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Loader = styled.div`
  width: 72px;
  height: 72px;
  margin-top: ${p => p.theme.spacing(20)};
  margin-left: auto;
  margin-right: auto;

  border-radius: 50%;
  border-top: 3px solid ${p => p.theme.colors.accent};
  border-right: 3px solid transparent;

  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
