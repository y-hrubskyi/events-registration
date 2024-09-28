import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import axios from '~/services/axios';

import { PageTitle } from '~/components/common/PageTitle/PageTitle.styled';
import { ParticipantList } from '~/components/ParticipantList/ParticipantList';

const EventParticipantsPage = () => {
  const { eventId } = useParams();
  const { state } = useLocation();
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/participants/event/${eventId}`);
        setParticipants(data);
      } catch {
        //
      }
    })();
  }, [eventId]);

  return (
    <div>
      <PageTitle>{`"${state?.eventTitle}"`} participants</PageTitle>
      {participants.length > 0 && (
        <ParticipantList participants={participants} />
      )}
    </div>
  );
};

export default EventParticipantsPage;
