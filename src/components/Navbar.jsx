import React, { useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  const [collapse, setCollapse] = useState(false);
  return (
    <nav
      className={`relative md:flex md:justify-between md:items-center p-4 bg-red-500 overflow-hidden ${
        collapse ? 'h-14' : 'h-full'
      }`}
    >
      <div>LOGO</div>
      <ul className="text-center md:text-start flex flex-col md:flex-row gap-3 md:gap-10 mt-4 md:mt-0">
        <li>Home</li>
        <li>Tentang</li>
        <li>Galeri</li>
      </ul>
      <button className="bg-green-500 w-full md:max-w-max mt-3 md:mt-0">
        Hubungi kami
      </button>
      <div
        className="bg-blue-500 h-8 w-8 grid place-items-center rounded absolute top-4 right-4 md:hidden"
        onClick={() => setCollapse(v => !v)}
      >
        {collapse ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faXmark} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
