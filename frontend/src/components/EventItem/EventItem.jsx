import * as SC from './EventItem.styled';

export const EventItem = ({ event }) => {
  return (
    <SC.EventCard>
      <SC.EventTitle>{event.title}</SC.EventTitle>
      <SC.EventDescription>{event.description}</SC.EventDescription>

      <SC.EventActionLinksWrapper>
        <SC.EventActionLink to={`/events/${event._id}/registration`}>
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
