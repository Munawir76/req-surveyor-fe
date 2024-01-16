import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useProgressBar from './hooks/useProgressBar';

function App() {
  useProgressBar();

  return (
    <>
      <Navbar />
      <div className="container md:mx-auto md:px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
