import React from 'react';
import cn from 'classnames';

import css from './button.module.css';

const Button = ({ className, children, ...props }) => {
  return (
    <button {...props} className={cn(css.button, className)}>
      {children}
    </button>
  );
};

export default Button;
