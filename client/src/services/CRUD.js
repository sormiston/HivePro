import api from './api-config'

// GET /bands

export const getBandNames = async () => {
  const res = await api.get('/bands/names')
  return res.data
}