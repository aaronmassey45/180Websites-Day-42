import axios from 'axios';

export default function fetchData() {
  const FETCH_DATA = 'FETCH_DATA';
  const API_KEY = 'PidV6viEcYCgjhRWwq172YQuSFNOiXQsZe9dmDTy';
  const URL = 'https://api.nasa.gov/planetary/apod?api_key=';
  const request =axios.get(URL+API_KEY);

  return { //return obj with props
    type: FETCH_DATA, //action typoe
    payload: request //action data
  }
}
