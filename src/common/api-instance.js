import axios from 'axios'
import { BACKEND_HOSTNAME } from './variables.js'

export default axios.create({
    baseURL: BACKEND_HOSTNAME + '/api',
    timeout: 5000,
    headers: {
      'Content-Type' : 'application/json',
      'Authorization': 'Token ' + process.env.VUE_APP_API_TOKEN
    }
})
  