import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const ButtonLink = ({ to, className, children, ...props }) => {
  return (
    <Link to={to} className={className}>
      <Button {...props}>{children}</Button>
    </Link>
  );
};

export default ButtonLink;
