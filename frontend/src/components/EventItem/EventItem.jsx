import { formatDate } from '~/utils/formatDate';

import * as SC from './EventItem.styled';

export const EventItem = ({ event }) => {
  const formattedDate = formatDate(new Date(event.date));

  return (
    <SC.EventCard>
      <SC.EventTitle>{event.title}</SC.EventTitle>
      <SC.EventInfoWrapper>
        <SC.EventInfo>{event.organizer}</SC.EventInfo>
        <SC.EventInfo>{formattedDate}</SC.EventInfo>
      </SC.EventInfoWrapper>
      <SC.EventDescription>{event.description}</SC.EventDescription>

      <SC.EventActionLinksWrapper>
        <SC.EventActionLink
          to={`/events/${event._id}/registration`}
          state={{ eventTitle: event.title }}
        >
          Register
        </SC.EventActionLink>
        <SC.EventActionLink
          to={`/events/${event._id}/participants`}
          state={{ eventTitle: event.title }}
        >
          View
        </SC.EventActionLink>
      </SC.EventActionLinksWrapper>
    </SC.EventCard>
  );
};
