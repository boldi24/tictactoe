import Login from './containers/Login';
import Home from './components/Home';

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