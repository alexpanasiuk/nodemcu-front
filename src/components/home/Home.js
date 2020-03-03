import React from 'react';
import ButtonLink from '../common/buttonLink/ButtonLink';

import css from './home.module.css';

const buttons = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const Home = () => {
  return (
    <div>
      <div className={css.title}>Система NodeMcu</div>
      <div className={css.buttonWrapper}>
        {buttons.map(({ id }) => (
          <ButtonLink to={`/sensors/${id}`} className={css.button}>
            Кімната {id}
          </ButtonLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
