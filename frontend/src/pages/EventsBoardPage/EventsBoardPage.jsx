import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import axios from '~/services/axios';

import { PageTitle } from '~/components/common/PageTitle/PageTitle.styled';
import { EventsSortForm } from '~/components/EventsSortForm/EventsSortForm';
import { EventList } from '~/components/EventList/EventList';
import { Paginator } from '~/components/Paginator/Paginator';
import { Loader } from '~/components/common/Loader/Loader';
import { PlaceholderText } from '~/components/common/Placeholder/Placeholder.styled';

const PER_PAGE = 12;

const EventsBoardPage = () => {
  const [events, setEvents] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();
  const page = params.get('page') ?? 1;

  const setPage = value => {
    params.set('page', value);
    setParams(params);
  };

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setIsLoading(true);

        const searchParams = new URLSearchParams({ page, limit: PER_PAGE });
        const { data } = await axios.get(`/events?${searchParams}`);

        setEvents(data.events);
        setTotalCount(data.totalCount);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const content = !error && events.length > 0;
  const noData = !isLoading && !error && events.length === 0;

  return (
    <div>
      <PageTitle>Events</PageTitle>
      {content && (
        <>
          <EventsSortForm />
          <EventList events={events} />
          <Paginator
            totalCount={totalCount}
            forcePage={page}
            initialPage={page}
            perPage={PER_PAGE}
            setPage={setPage}
          />
        </>
      )}
      {loading && <Loader />}
      {hasError && (
        <PlaceholderText>Oops.. Something went wrong</PlaceholderText>
      )}
      {noData && <PlaceholderText>No Events</PlaceholderText>}
    </div>
  );
};

export default EventsBoardPage;
