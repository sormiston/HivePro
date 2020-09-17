import axios from 'axios'

let apiUrl

const apiUrls = {
  development: 'http://localhost:3000',
  production: null
}
if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}
const api = axios.create({
  baseURL: apiUrl
})

export default api