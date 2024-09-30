import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Loader } from '~/components/common/Loader/Loader';

import * as SC from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <SC.Container>
      <Link to="/">Events Board</Link>

      <SC.Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </SC.Main>
    </SC.Container>
  );
};
