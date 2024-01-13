import React from 'react';
import useProgressBar from '../hooks/useProgressBar';

function NotFound() {
  useProgressBar();
  return <div>404 NotFound</div>;
}

export default NotFound;
