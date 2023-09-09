// navigationConfig.ts
import About from "../components/About";
import Home from "../components/Home";
import { ROUTE_MAIN } from "../constants/routes";

export const navigationConfig = [
  {
    path: '/about',
    roles: ['user'],
    component: About
  },
  {
    path: ROUTE_MAIN,
    roles: ['admin', 'user'],
    component: Home
  },
  // Add more routes here
];
