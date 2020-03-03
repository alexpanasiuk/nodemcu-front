import { SET_PAGING_INFO } from '../actions/types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PAGING_INFO: {
      return {
        ...state,
        ...payload,
      };
    }

    default:
      return state;
  }
};
