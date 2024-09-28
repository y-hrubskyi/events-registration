import styled from 'styled-components';

export const ParticipantList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(5)};
  justify-content: center;
`;
