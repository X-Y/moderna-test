import request from 'request-promise';
import { mainEndPoint } from '../config/endPoints';

export const requestUrl = ({ url, json=true }) => {
  const options = {
    url,
    json
  }
  return request(options)
    .then(resp => resp)
    .catch(err => {
      console.log(err);
      throw err;
    })
}

export const requestMainEndPoint = () => {
  return requestUrl({
    url: mainEndPoint,
  });
}