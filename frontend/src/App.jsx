import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { SharedLayout } from '~/components/SharedLayout/SharedLayout';

const EventsBoardPage = lazy(
  () => import('~/pages/EventsBoardPage/EventsBoardPage')
);
const EventRegistrationPage = lazy(
  () => import('~/pages/EventRegistrationPage/EventRegistrationPage')
);
const EventParticipantsPage = lazy(
  () => import('~/pages/EventParticipantsPage/EventParticipantsPage')
);

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
