import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        props.loginSubmit(formData)
      }}
    >
      <h1>Login</h1>
      <label htmlFor='email'>
        Email:
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange} />
      </label>
      <br />
      <label htmlFor='password'>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <small>What...no login?</small>
      <Link to='/register'>
        Register
      </Link>
      <button type='submit'>SUBMIT</button>
      
    </form>
  )
}
