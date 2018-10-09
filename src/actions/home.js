import axios from 'axios';
import {ROOT_BASE_URL} from './../common/common';

export const FETCH_HOME_VALUES = 'fetch_home_values';
const FETCH_HOME_VALUE = 'api/home_data';

export function searchValue(val,callback) {

if(val==='june'){
callback([90, 89, 87, 85, 82, 80, 70, 69, 69, 68, 65, 63, 62, 60,58]);

}
if(val==='july'){
  callback([98, 99, 85, 85, 85, 84, 70, 67, 67, 56, 57, 54, 54, 59,67]);
}

  return ({type: FETCH_HOME_VALUES, payload: 'request'});
}
