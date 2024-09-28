import { useLocation } from 'react-router-dom';
import { AddParticipantForm } from '~/components/AddParticipantForm/AddParticipantForm';

import { PageTitle } from '~/components/common/PageTitle/PageTitle.styled';

const EventRegistrationPage = () => {
  const { state } = useLocation();

  return (
    <div>
      <PageTitle>{`"${state?.eventTitle}"`} registration</PageTitle>
      <AddParticipantForm />
    </div>
  );
};

export default EventRegistrationPage;
