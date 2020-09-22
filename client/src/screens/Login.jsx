import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Field, Label, Control, Input, Title } from 'rbx'

export default function Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.loginSubmit(formData);
      }}
    >
      <h1>Login</h1>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <br />
      <small>What...no login?</small>
      <Link to="/register">Register</Link>
      <button type="submit">SUBMIT</button>
    </form>
    
      
    <div className="form-container">
      <form onSubmit={(e) => {
        e.preventDefault();
        props.loginSubmit(formData);
        }}>
          
          <Field>
            <Title>
              Login
            </Title>
      <Label>Email</Label>
      <Control>
        <Input type="email" placeholder="e.g. alexsmith@gmail.com" />
      </Control>
    </Field>
    <Field>
      <Label>Password</Label>
      <Control>
        <Input type="password" placeholder="" />
      </Control>
          </Field>
      </form>
    </div>
      </>
  );
}
