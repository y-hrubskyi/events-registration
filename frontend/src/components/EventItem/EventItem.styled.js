import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EventCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
  padding: ${p => p.theme.spacing(4)};
  max-width: 250px;

  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.card};
`;

export const EventTitle = styled.h3``;

export const EventDescription = styled.p``;

export const EventInfoWrapper = styled.div``;

export const EventInfo = styled.p``;

export const EventActionLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EventActionLink = styled(Link)``;
