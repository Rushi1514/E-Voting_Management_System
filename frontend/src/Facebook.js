import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';

const Facebook = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <FaFacebookSquare size={40} />
    </a>
  );
};

export default Facebook;
