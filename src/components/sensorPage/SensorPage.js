import React from 'react';
import SensorTable from '../../containers/sensorTable/SensorTable';
import Pagination from '../../containers/paginataion/Pagination';

import css from './sensorPage.module.css';

const SensorPage = ({ match, history }) => {
  const sensorId = match.params.id;

  const goBack = () => history.push('/');
  return (
    <div>
      <h1 className={css.title}>Кімната {sensorId} </h1>
      <div className={css.backWrapper}>
        <div className={css.back} onClick={goBack}>
          <span className={css.backArrow}>←</span>
          <span>Повернутися</span>
        </div>
      </div>
      <SensorTable sensorId={sensorId} />
      <Pagination />
    </div>
  );
};

export default SensorPage;
