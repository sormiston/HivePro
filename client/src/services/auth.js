import api from './api-config'

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { authentication: loginData })
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

// below needs a throw statement, no?

export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/users', { users: registerData })
    localStorage.setItem('authToken', resp.data.token)
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  } catch (err) {
    return err
  }
}