import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getBandNames } from '../services/CRUD'
import {
  Field,
  Label,
  Control,
  Input,
  Title,
  Button,
  Select,
} from 'rbx'

export default function Register(props) {
  const [bandNames, setBandNames] = useState([])
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    band: '',
    email: '',
    password: '',
    password_confirmation: '',
    acct_holder: false,
  })

  useEffect(() => {
    const loadBandNames = async () => {
      const res = await getBandNames()
      setBandNames(res)
    }
    loadBandNames()
  }, [])

  const {
    first_name,
    last_name,
    band,
    email,
    password,
    password_confirmation,
  } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='register-form-container'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.registerSubmit(formData)
        }}
      >
        <Title>Register</Title>

        <Label id='first-name'>First Name</Label>

        <Control>
          <Input
            id='first-name'
            type='text'
            name='first_name'
            placeholder='First Name'
            onChange={handleChange}
          />
        </Control>

        <Label id='last-name'>Last Name</Label>

        <Control>
          <Input
            id='last-name'
            type='text'
            name='last_name'
            placeholder='Last Name'
            onChange={handleChange}
          />
        </Control>

        <Label htmlFor='email'>Email</Label>

        <Control>
          <Input
            type='text'
            name='email'
            placeholder='email'
            onChange={handleChange}
          />
        </Control>

        <Label>Which band?</Label>

        <Control>
          <Select.Container>
            <Select name='band' id='band' onChange={handleChange}>
              <Select.Option>-- Your band --</Select.Option>
              {bandNames.map((el) => (
                <Select.Option key={el[1]} value={el[1]}>
                  {el[0]}
                </Select.Option>
              ))}
            </Select>
          </Select.Container>
        </Control>

        <Label>Password</Label>

        <Control>
          <Input
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleChange}
          />
        </Control>

        <Label htmlFor='password_confirmation'>
          Password Confirmation
        </Label>

        <Control>
          <Input
            type='password'
            name='password_confirmation'
            value={password_confirmation}
            onChange={handleChange}
          />
        </Control>

        <Button color='dark' size='large' id='submit' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  )
}
