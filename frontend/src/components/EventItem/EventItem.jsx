import { Link } from 'react-router-dom';

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
      <h3>{title}</h3>
      <div>
        <p>{organizer}</p>
        <p>{formattedDate}</p>
      </div>
      <p>{description}</p>

      <SC.EventActionLinksWrapper>
        <Link to={`/events/${_id}/registration`} state={eventInfo}>
          Register
        </Link>
        <Link to={`/events/${_id}/participants`} state={eventInfo}>
          View
        </Link>
      </SC.EventActionLinksWrapper>
    </SC.EventCard>
  );
};
