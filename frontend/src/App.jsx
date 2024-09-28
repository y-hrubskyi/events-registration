import { Navigate, Route, Routes } from 'react-router-dom';

import SharedLayout from '~/components/SharedLayout/SharedLayout';
import EventsBoardPage from '~/pages/EventsBoardPage/EventsBoardPage';
import EventRegistrationPage from '~/pages/EventRegistrationPage/EventRegistrationPage';
import EventParticipantsPage from '~/pages/EventParticipantsPage/EventParticipantsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/events" />} />
        <Route path="events" element={<EventsBoardPage />} />
        <Route
          path="events/:eventId/registration"
          element={<EventRegistrationPage />}
        />
        <Route
          path="events/:eventId/participants"
          element={<EventParticipantsPage />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
