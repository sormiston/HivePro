import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getBandNames } from "../services/CRUD";

export default function Register(props) {
  const [bandNames, setBandNames] = useState([])
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    band: '',
    email: '',
    password: '',
    acct_holder: false
  })
  
  useEffect(() => {
    const loadBandNames = async () => {
      const res = await getBandNames()
      setBandNames(res)
    }
    loadBandNames()
  }, [])

  
  const { first_name, last_name, band, email, password } = formData

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
        props.registerSubmit(formData)
      }}
    >
      <h1>Register</h1>
      <label htmlFor='first_name'>
        First Name:
        <input
          type='text'
          name='first_name'
          value={first_name}
          onChange={handleChange} />
      </label>
      <br />
      <label htmlFor='last_name'>
        Last Name:
        <input
          type='text'
          name='last_name'
          value={last_name}
          onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="band">
        Which band?
        <select name="band" id="band">
        
        </select>
        </label>
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