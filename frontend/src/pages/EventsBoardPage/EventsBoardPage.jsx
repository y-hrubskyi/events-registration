import { useEffect, useState } from 'react';

import { PageTitle } from '~/components/common/PageTitle/PageTitle.styled';
import { EventList } from '~/components/EventList/EventList';
import { Loader } from '~/components/common/Loader/Loader.styled';
import { PlaceholderText } from '~/components/common/Placeholder/Placeholder.styled';

import axios from '~/services/axios';

const EventsBoardPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setIsLoading(true);

        const { data } = await axios.get('/events');

        setEvents(data.events);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const content = !error && events.length > 0;
  const noData = !isLoading && !error && events.length === 0;

  return (
    <div>
      <PageTitle>Events</PageTitle>
      {content && <EventList events={events} />}
      {loading && <Loader />}
      {hasError && (
        <PlaceholderText>Oops.. Something went wrong</PlaceholderText>
      )}
      {noData && <PlaceholderText>No Data</PlaceholderText>}
    </div>
  );
};

export default EventsBoardPage;
