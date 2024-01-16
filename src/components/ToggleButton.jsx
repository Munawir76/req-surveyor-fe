import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ToggleButton({ collapse, onClick }) {
  return (
    <div
      className="border border-light/30 h-10 w-10 grid place-items-center rounded absolute top-2.5 right-4 md:hidden"
      onClick={onClick}
    >
      {collapse ? (
        <FontAwesomeIcon icon={faBars} />
      ) : (
        <FontAwesomeIcon icon={faXmark} />
      )}
    </div>
  );
}

export default ToggleButton;
