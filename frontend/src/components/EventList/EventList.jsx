import { EventItem } from '~/components/EventItem/EventItem';

import * as SC from './EventList.styled';

export const EventList = ({ events }) => {
  return (
    <SC.EventList>
      {events.map(event => (
        <EventItem key={event._id} event={event} />
      ))}
    </SC.EventList>
  );
};
