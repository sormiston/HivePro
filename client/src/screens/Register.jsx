import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBandNames } from "../services/CRUD";

export default function Register(props) {
  const [bandNames, setBandNames] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    band: "",
    email: "",
    password: "",
    password_confirmation: "",
    acct_holder: false,
  });

  useEffect(() => {
    const loadBandNames = async () => {
      const res = await getBandNames();
      setBandNames(res);
    };
    loadBandNames();
  }, []);

  const { first_name, last_name, band, email, password, password_confirmation } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.registerSubmit(formData);
      }}
    >
      <h1>Register</h1>
      <label htmlFor="first_name">First Name:</label>
      <input
        type="text"
        name="first_name"
        value={first_name}
        onChange={handleChange}
      />

      <br />
      <label htmlFor="last_name">Last Name:</label>
      <input
        type="text"
        name="last_name"
        value={last_name}
        onChange={handleChange}
      />

      <br />
      <label htmlFor="band">Which band?</label>
      <select name="band" id="band" onChange={handleChange}>
        <option defaultValue>
          -- Choose wisely --
        </option>
        {bandNames.map((el) => (
          <option key={el[1]} value={el[1]}>{el[0]}</option>
        ))}
      </select>

      <br />

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
      <label htmlFor="password_confirmation">Password Confirmation:</label>
      <input
        type="password"
        name="password_confirmation"
        value={password_confirmation}
        onChange={handleChange}
      />

      <br />
      <small>What...no login?</small>
      <Link to="/register">Register</Link>
      <button type="submit">SUBMIT</button>
    </form>
  );
}
