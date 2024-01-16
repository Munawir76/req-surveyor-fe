import Home from '../pages/Home';
import App from '../App';
import NotFound from '../pages/404';
import Profile from '../pages/Profile';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
];

export default routes;
