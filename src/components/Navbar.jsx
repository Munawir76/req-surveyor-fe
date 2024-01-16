import React, { useState } from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import ToggleButton from './ToggleButton';

function Navbar() {
  const [collapse, setCollapse] = useState(true);

  return (
    <nav
      className={`relative md:flex md:justify-between md:items-center p-4 bg-primary text-light overflow-hidden transition-all ease-linear ${
        collapse ? 'h-14' : 'h-60 md:h-full'
      }`}
    >
      <div>LOGO</div>
      <ul className="text-center md:text-start flex flex-col md:flex-row gap-4 md:gap-10 mt-4 md:mt-0">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/profile'}>Profil</Link>
        </li>
        <li>
          <Link to={'/product'}>Produk</Link>
        </li>
      </ul>
      <Link to={'/contact'} className="block mt-4 md:mt-0">
        <button className="border border-light p-2 text-white rounded w-full md:max-w-max">
          <FontAwesomeIcon icon={faPhone} /> Hubungi kami
        </button>
      </Link>
      <ToggleButton collapse={collapse} onClick={() => setCollapse(v => !v)} />
    </nav>
  );
}

export default Navbar;
