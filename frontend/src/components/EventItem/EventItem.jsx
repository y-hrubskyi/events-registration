import { formatDate } from '~/utils/formatDate';

import * as SC from './EventItem.styled';

export const EventItem = ({
  event: { _id, title, organizer, date, description }
}) => {
  const formattedDate = formatDate(new Date(date));
  const eventInfo = {
    eventTitle: title,
    organizer,
    date: formattedDate
  };

  return (
    <SC.EventCard>
      <SC.EventTitle>{title}</SC.EventTitle>
      <SC.EventInfoWrapper>
        <SC.EventInfo>{organizer}</SC.EventInfo>
        <SC.EventInfo>{formattedDate}</SC.EventInfo>
      </SC.EventInfoWrapper>
      <SC.EventDescription>{description}</SC.EventDescription>

      <SC.EventActionLinksWrapper>
        <SC.EventActionLink
          to={`/events/${_id}/registration`}
          state={eventInfo}
        >
          Register
        </SC.EventActionLink>
        <SC.EventActionLink
          to={`/events/${_id}/participants`}
          state={eventInfo}
        >
          View
        </SC.EventActionLink>
      </SC.EventActionLinksWrapper>
    </SC.EventCard>
  );
};
