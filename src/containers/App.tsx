import React, { Suspense } from 'react';
import Routes from './AppRoutes';
import { useSelector } from 'react-redux';
import AuthWrapper from './AuthWrapper';

const App = (): JSX.Element => {
  const userRole = useSelector((state: any) => state.app.userRole);

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <AuthWrapper>
        <Routes userRole={userRole} />
      </AuthWrapper>
    </Suspense>
  );
};

export default App;
