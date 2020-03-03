import { SET_FILTERS } from '../actions/types';

const initialState = {
  sortDir: 'desc',
  sortColumn: 'date',
  page: 1,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTERS: {
      return {
        ...state,
        ...payload,
      };
    }

    default:
      return state;
  }
};
