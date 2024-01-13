import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Router() {
  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto md:px-4">
        <RouterProvider router={routes} />
      </div>
      <Footer />
    </>
  );
}

export default Router;
