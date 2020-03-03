import * as types from './types';

export const setPagingInfo = params => {
  return {
    type: types.SET_PAGING_INFO,
    payload: params,
  };
};
