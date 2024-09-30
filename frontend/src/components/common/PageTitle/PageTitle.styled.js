import styled from 'styled-components';

export const BasePageTitle = styled.h1`
  margin-bottom: ${p => p.theme.spacing(10)};
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: ${p => p.theme.colors.black};
`;

export const PageTitle = styled(BasePageTitle)`
  margin-bottom: ${p => p.theme.spacing(5)};
`;
