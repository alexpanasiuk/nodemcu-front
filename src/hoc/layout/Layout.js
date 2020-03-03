import React from 'react';

import css from './layout.module.css';
const Layout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>{children}</div>
    </div>
  );
};

export default Layout;
