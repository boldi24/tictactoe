import Login from './containers/Login';
import Home from './containers/Home';

export const publicRoutes = [
  {
    path: '/login',
    component: Login
  }
];

export const privateRoutes = [
  {
    path: '/home',
    component: Home
  }
];