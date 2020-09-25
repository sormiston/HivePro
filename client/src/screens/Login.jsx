import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Field, Label, Control, Input, Title, Button } from 'rbx'

const RegisterSubmitSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 8rem;
  justify-content: space-between;

  .what-no-login a {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: '#34495e';
      font-weight: 1000;
    }
  }
`
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
    <>
      <div className='form-container'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            props.loginSubmit(formData)
          }}
        >
          <Field>
            <Title>Login</Title>
            <Label>Email</Label>
            <Control>
              <Input
                name='email'
                type='email'
                placeholder='e.g. alexsmith@gmail.com'
                onChange={handleChange}
              />
            </Control>
          </Field>
          <Field>
            <Label>Password</Label>
            <Control>
              <Input
                name='password'
                type='password'
                placeholder=''
                onChange={handleChange}
              />
            </Control>

            <br />
            <RegisterSubmitSection>
              <Button color='dark' size='large' type='submit'>
                SUBMIT
              </Button>
              <div className='what-no-login'>
                <small>What...no login?</small>
                <br />
                <Link to='/register'>Register</Link>
              </div>
            </RegisterSubmitSection>
          </Field>
        </form>
      </div>
    </>
  )
}
