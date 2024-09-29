import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AddParticipantForm } from '~/components/AddParticipantForm/AddParticipantForm';

import axios from '~/services/axios';

import { PageTitle } from '~/components/common/PageTitle/PageTitle.styled';

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
      <AddParticipantForm registerParticipant={registerParticipantForEvent} />
    </div>
  );
};

export default EventRegistrationPage;
