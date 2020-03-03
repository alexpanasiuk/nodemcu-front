import React from 'react';
import cn from 'classnames';

import css from './pagination.module.css';

const Pagination = ({ pageCount, current, onClick }) => {
  const prevPrev = current - 2;
  const prev = current - 1;
  const next = current + 1;
  const nextNext = current + 2;

  const isPrevPrev = prevPrev > 0;
  const isPrev = prev > 0;
  const isNext = next <= pageCount;
  const isNextNext = nextNext <= pageCount;
  const isGoToStart = current !== 1;
  const isGoToEnd = current !== pageCount;

  return (
    <div className={css.wrapper}>
      {isGoToStart && (
        <div className={css.button} onClick={() => onClick(1)}>
          &lt;&lt;
        </div>
      )}
      {isPrev && (
        <div className={css.button} onClick={() => onClick(prev)}>
          &lt;
        </div>
      )}
      {isPrevPrev && (
        <div className={css.button} onClick={() => onClick(prevPrev)}>
          {prevPrev}
        </div>
      )}
      {isPrev && (
        <div className={css.button} onClick={() => onClick(prev)}>
          {prev}
        </div>
      )}
      <div className={cn(css.button, css.current)}>{current}</div>
      {isNext && (
        <div className={css.button} onClick={() => onClick(next)}>
          {next}
        </div>
      )}
      {isNextNext && (
        <div className={css.button} onClick={() => onClick(nextNext)}>
          {nextNext}
        </div>
      )}
      {isNext && (
        <div className={css.button} onClick={() => onClick(next)}>
          &gt;
        </div>
      )}
      {isGoToEnd && (
        <div className={css.button} onClick={() => onClick(pageCount)}>
          &gt;&gt;
        </div>
      )}
    </div>
  );
};

export default Pagination;
