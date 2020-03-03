import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions/sensorsActions';
import { setFilters } from '../../actions/sensorsFiltersActions';

import SensorTable from '../../components/sensorTable/SensorTable';

const SensorTableContainer = ({
  sensorId,
  sensors,
  sensorsFilters,
  loadData,
  setFilters,
}) => {
  useEffect(() => {
    loadData(sensorId, sensorsFilters);
  }, [loadData, sensorId, sensorsFilters]);

  const handleChangeFilter = column => {
    const { sortColumn, sortDir } = sensorsFilters;
    let newFilters = { ...sensorsFilters };

    if (sortColumn === column) {
      newFilters.sortDir = sortDir === 'desc' ? 'asc' : 'desc';
    } else {
      newFilters.sortColumn = column;
    }

    setFilters(newFilters);
  };

  return (
    <SensorTable
      data={sensors}
      changeFilter={handleChangeFilter}
      sensorsFilters={sensorsFilters}
    />
  );
};

const mapStateToProps = ({ sensors, sensorsFilters }) => {
  return {
    sensors,
    sensorsFilters,
  };
};

const mapDispatchToProps = {
  loadData,
  setFilters,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SensorTableContainer);
