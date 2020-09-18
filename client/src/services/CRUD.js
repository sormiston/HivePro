import api from './api-config'

// GET /bands

export const getBandNames = async () => {
  const res = await api.get('/bands/names')
  return res.data
}

// GET /appointments

export const getAppointments = async (datestr) => {
  // console.log(datestr)
  try {
    const res = await api.get(`/appointments?day=${datestr}`)
    return res.data
  } catch (err) {
    return err
  }
}