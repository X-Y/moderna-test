import { requestMainEndPoint } from '../../services/api';

export const FETCH_MAIN_API = 'fetch_main_api';
export const FETCH_MAIN_API_FAIL = 'fetch_main_api_fail§';

export const fetchMainApi = dispatch => {
  return () => {
    requestMainEndPoint().then(resp => {
      dispatch(fetchMainApiDone(resp));
    }).catch(err => {
      dispatch(fetchMainApiFail(err));
    })
  }
}

const fetchMainApiDone = ({insurances, embedded, meta}) => {
  return {
    type: FETCH_MAIN_API,
    payload: {
      insurances,
      embedded,
      meta,
    }
  }
}

const fetchMainApiFail = err => {
  return {
    type: FETCH_MAIN_API_FAIL,
    payload: {
      error: err
    }
  }
}