import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  padding: ${p => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    padding-right: ${p => p.theme.spacing(15)};
    padding-left: ${p => p.theme.spacing(15)};
  }

  @media screen and (min-width: 1440px) {
    padding-right: ${p => p.theme.spacing(32)};
    padding-left: ${p => p.theme.spacing(32)};
  }
`;

export const Main = styled.main`
  padding-top: ${p => p.theme.spacing(10)};
`;
