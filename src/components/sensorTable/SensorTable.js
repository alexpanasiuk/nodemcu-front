import React from 'react';
import cn from 'classnames';

import css from './sensorsTable.module.css';
import { formatDate } from '../../utils/formatters';

const tableHeadData = [
  { name: 'Температура', sortColumn: 'temp' },
  { name: 'Вологість', sortColumn: 'humidity' },
  { name: 'Дата', sortColumn: 'date' },
];

const SensorTable = ({ data, changeFilter, sensorsFilters }) => {
  const renderRow = items => {
    return items.map(({ id, temp, humidity, date }) => {
      return (
        <tr className={css.row} key={id}>
          <td className={css.cell}>{temp.toFixed(2)}</td>
          <td className={css.cell}>{humidity.toFixed(2)}</td>
          <td className={css.cell}>{formatDate(date)}</td>
        </tr>
      );
    });
  };

  const renderHead = items => {
    return items.map(({ name, sortColumn }) => (
      <th
        className={css.cell}
        key={sortColumn}
        onClick={() => changeFilter(sortColumn)}
      >
        <span>{name}</span>
        {sensorsFilters.sortColumn === sortColumn && (
          <span
            className={cn(css.arrow, {
              [css.rotateArrow]: sensorsFilters.sortDir === 'desc',
            })}
          >
            ↑
          </span>
        )}
      </th>
    ));
  };

  return (
    <div className={css.wrapTable100}>
      <table className={css.table}>
        <thead>
          <tr className={cn(css.row, css.header)}>
            {renderHead(tableHeadData)}
          </tr>
        </thead>
        <tbody>{renderRow(data)}</tbody>
      </table>
    </div>
  );
};

export default SensorTable;
