import styled from 'styled-components';

export const PlaceholderText = styled.p`
  margin-bottom: ${p => p.theme.spacing(5)};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${p => p.theme.colors.black};
`;
