import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import axios from '~/services/axios';
import { filterParticipants } from '~/utils/filterParticipants';

import { PageTitle } from '~/components/common/PageTitle/PageTitle.styled';
import { EventInfo } from '~/components/common/EventInfo/EventInfo.styled';
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
  const [filter, setFilter] = useState({ fullname: '', email: '' });

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

  const visibleParticipants = filterParticipants(participants, filter);

  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const content = !error && participants.length > 0;
  const noData = !isLoading && !error && visibleParticipants.length === 0;

  return (
    <div>
      <PageTitle>{`"${state?.eventTitle}"`} participants</PageTitle>
      <EventInfo>
        <p>Organizer: {state?.organizer}</p>
        <p>Date: {state?.date}</p>
      </EventInfo>
      {content && (
        <>
          <FIlterParticipants setFilter={setFilter} />
          <ParticipantList participants={visibleParticipants} />
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
