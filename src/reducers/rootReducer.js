import { combineReducers } from 'redux';
import sensorReducer from './sensorReducer';
import sensorsFiltersReducer from './sensorsFiltersReducer';
import paginationReducer from './paginationReducer';

const rootReducer = combineReducers({
  sensors: sensorReducer,
  sensorsFilters: sensorsFiltersReducer,
  pagination: paginationReducer,
});

export default rootReducer;
