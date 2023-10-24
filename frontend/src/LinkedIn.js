import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const LinkedIn = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={40} />
    </a>
  );
};

export default LinkedIn;
