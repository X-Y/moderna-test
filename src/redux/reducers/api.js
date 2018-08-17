import { FETCH_MAIN_API, FETCH_MAIN_API_FAIL } from '../actions/api';

const initialState = {
  meta: {},
  embedded: {},
  insurances: [],

  fetchFailed: false,
}

export const api = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MAIN_API:
      const {
        meta,
        embedded,
        insurances
      } = action.payload;
      return {
        ...state,
        meta,
        embedded,
        insurances,

        fetchFailed: false
      };
    case FETCH_MAIN_API_FAIL:
      console.log(action.payload.error);
      return {
        ...state,
        fetchFailed: true
      }
    default:
      return state;
  }
}