import { useLocation, useNavigate, useParams } from 'react-router-dom';

import axios from '~/services/axios';

import { PageTitle } from '~/components/common/PageTitle/PageTitle.styled';
import { EventInfo } from '~/components/common/EventInfo/EventInfo.styled';
import { AddParticipantForm } from '~/components/AddParticipantForm/AddParticipantForm';

const EventRegistrationPage = () => {
  const { eventId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const registerParticipantForEvent = async participant => {
    try {
      const newParticipant = { ...participant, eventId };

      await axios.post('/participants', newParticipant);
      navigate(`/events/${eventId}/participants`, {
        state: { eventTitle: state?.eventTitle }
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <PageTitle>{`"${state?.eventTitle}"`} registration</PageTitle>
      <EventInfo>
        <p>Organizer: {state.organizer}</p>
        <p>Date: {state.date}</p>
      </EventInfo>
      <AddParticipantForm registerParticipant={registerParticipantForEvent} />
    </div>
  );
};

export default EventRegistrationPage;
