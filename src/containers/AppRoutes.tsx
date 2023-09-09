import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Layout from './Layout';
import { navigationConfig } from './navigationConfig';

const Routes = ({ userRole }: { userRole: string }): JSX.Element => {
  const routes: React.ReactNode = useRoutes([
    ...navigationConfig.map((item) => {
      const { path, roles, component: Component } = item;
      return {
        path,
        element: roles.includes(userRole) ? <Layout><Component /></Layout> : <Navigate to="/404" />
      };
    }),
    {
      path: '/404',
      element: <NotFound />
    },
    {
      path: '*',
      element: <Navigate to="/404" />
    }
  ]);

  return routes as JSX.Element;
};

export default Routes;
