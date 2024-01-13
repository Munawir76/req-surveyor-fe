import Home from '../pages/Home';
import About from '../pages/About';
import App from '../App';
import NotFound from '../pages/404';

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
        path: '/about',
        element: <About />,
      },
    ],
  },
];

export default routes;
