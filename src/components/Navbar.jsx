import React, { useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Navbar() {
  const [collapse, setCollapse] = useState(true);

  return (
    <nav
      className={`relative md:flex md:justify-between md:items-center p-4 bg-white border-b border-gray-400 overflow-hidden transition-all ease-linear ${
        collapse ? 'h-14' : 'h-52'
      }`}
    >
      <div>LOGO</div>
      <ul className="text-center md:text-start flex flex-col md:flex-row gap-3 md:gap-10 mt-4 md:mt-0">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>Tentang</Link>
        </li>
        <li>
          <Link to={'/gallery'}>galeri</Link>
        </li>
      </ul>
      <button className="bg-blue-500 text-white rounded w-full md:max-w-max mt-3 md:mt-0">
        Hubungi kami
      </button>
      <div
        className="border border-gray-400 h-8 w-8 grid place-items-center rounded absolute top-3.5 right-4 md:hidden"
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
