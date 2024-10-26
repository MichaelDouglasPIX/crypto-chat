import axios from 'axios';

async function request(config) {
  const response = await axios(config);
  return response.data;
}

export default request;
