import { useLocation } from 'react-router-dom';

import { PageTitle } from '~/components/common/PageTitle/PageTitle.styled';

const EventRegistrationPage = () => {
  const { state } = useLocation();

  return (
    <div>
      <PageTitle>{`"${state?.eventTitle}"`} registration</PageTitle>
    </div>
  );
};

export default EventRegistrationPage;
