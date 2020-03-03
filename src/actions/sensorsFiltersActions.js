import * as types from './types';

export const setFilters = (params) => {
  return {
    type: types.SET_FILTERS,
    payload: params,
  }
}
