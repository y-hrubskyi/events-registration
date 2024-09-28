import { useEffect, useState } from 'react';

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

  const isEmpty = !error && !isLoading && events.length === 0;

  return (
    <div>
      Events
      {isLoading && <Loader />}
      {error && !isLoading && (
        <PlaceholderText>Oops.. Something went wrong</PlaceholderText>
      )}
      {isEmpty ? (
        <PlaceholderText>No Data</PlaceholderText>
      ) : (
        <PlaceholderText>Done</PlaceholderText>
      )}
    </div>
  );
};

export default EventsBoardPage;
