import axios from 'axios'

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/DaviFreiredaSilva/hc-json-server-1'
  })
  
export default api;