import {
  LOAD_DATA,
} from '../actions/types';


const initialState = [];

export default (state = initialState, { type, payload}) => {

  switch(type) {

    case LOAD_DATA: {
      return payload;
    }

    default:
      return state;
  }
};
