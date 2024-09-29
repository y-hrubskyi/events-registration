import styled from 'styled-components';

export const ParticipantCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
  padding: ${p => p.theme.spacing(4)};
  max-width: 250px;

  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.card};
`;

export const ParticipantFullName = styled.h3``;

export const ParticipantEmail = styled.p``;
