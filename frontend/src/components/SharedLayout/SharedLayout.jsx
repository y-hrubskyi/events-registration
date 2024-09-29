import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import * as SC from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <SC.Container>
      <Link to="/">Events Board</Link>

      <SC.Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </SC.Main>
    </SC.Container>
  );
};
