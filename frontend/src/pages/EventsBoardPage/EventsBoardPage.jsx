import { useEffect, useState } from 'react';

import axios from '~/services/axios';

const EventsBoardPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/events?');
        setEvents(data.events);
      } catch {
        //
      }
    })();
  }, []);

  const isEmpty = events.length === 0;

  return (
    <div>
      Events
      {isEmpty ? <p>No Data</p> : <p>Done</p>}
    </div>
  );
};

export default EventsBoardPage;
