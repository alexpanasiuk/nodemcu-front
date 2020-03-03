import * as types from './types';
import * as api from '../api/api';

export const loadData = (id, params) => dispatch => {
  return api
    .loadData(id, params)
    .then(response => {
      const { data, pageCount } = response.data;
      dispatch({
        type: types.LOAD_DATA,
        payload: data,
      });
      dispatch({
        type: types.SET_PAGING_INFO,
        payload: { pageCount },
      });
    })
    .catch(e => console.log(e));
};
