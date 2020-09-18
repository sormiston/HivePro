import api from './api-config'

export const loginUser = async (loginData) => {
  const res = await api.post('/auth/login', { authentication: loginData })
  localStorage.setItem('authToken', res.data.token)
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
  return res.data.user
}

// below needs a throw statement, no?

export const registerUser = async (registerData) => {
  try {
    const res = await api.post('/users', { user: registerData })
    localStorage.setItem('authToken', res.data.token)
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    return res.data.user
  } catch (err) {
    return err
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken')
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const res = await api.get('/auth/verify')
    return res.data
  } else {
    return null
  }
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null
}