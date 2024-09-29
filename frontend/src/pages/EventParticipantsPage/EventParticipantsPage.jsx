import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import axios from '~/services/axios';

import { PageTitle } from '~/components/common/PageTitle/PageTitle.styled';
import { FIlterParticipants } from '~/components/FIlterParticipants/FIlterParticipants';
import { ParticipantList } from '~/components/ParticipantList/ParticipantList';
import { PlaceholderText } from '~/components/common/Placeholder/Placeholder.styled';
import { Loader } from '~/components/common/Loader/Loader';

const EventParticipantsPage = () => {
  const { eventId } = useParams();
  const { state } = useLocation();
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setIsLoading(true);

        const { data } = await axios.get(`/participants/event/${eventId}`);
        setParticipants(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [eventId]);

  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const content = !error && participants.length > 0;
  const noData = !isLoading && !error && participants.length === 0;

  return (
    <div>
      <PageTitle>{`"${state?.eventTitle}"`} participants</PageTitle>
      {content && (
        <>
          <FIlterParticipants />
          <ParticipantList participants={participants} />
        </>
      )}
      {loading && <Loader />}
      {hasError && (
        <PlaceholderText>Oops.. Something went wrong</PlaceholderText>
      )}
      {noData && <PlaceholderText>No Participants</PlaceholderText>}
    </div>
  );
};

export default EventParticipantsPage;
