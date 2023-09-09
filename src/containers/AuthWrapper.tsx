import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ROUTE_MAIN } from '../constants/routes';
import { ACCESS_TOKEN } from '../constants/AppVarContants';

const publicRoutes = [
  ROUTE_MAIN
];

const AuthWrapper = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const userRole = useSelector((state: any) => state.app.userRole);
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const location = useLocation();

  const isPublicRoute = publicRoutes.includes(location.pathname);

  useEffect(() => {
    if (isPublicRoute) {
      // If it's a public route, no need to fetch the user role
      // dispatch(setUserRole(null));
      return;
    }

    // Check if there is a token in localStorage
    if (accessToken) {
      // dispatch(fetchUserProfile());
    } else {
      // If there is no token, set the user role to a default value or null
      // dispatch(setUserRole(null));
      // navigate(ROUTE_MAIN);
    }
  }, [dispatch, accessToken, isPublicRoute]);

  if (isPublicRoute || userRole === null) {
    // Render the public routes or show a message indicating that the user needs to log in
    return <>{children}</>;
  }

  if (!userRole) {
    // You can show a loading spinner or any other UI while fetching the user role
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default AuthWrapper;
