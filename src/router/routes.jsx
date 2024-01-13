import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>Not Found</div>,
  },
]);

export default routes;
