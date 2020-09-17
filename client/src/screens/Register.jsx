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
    acct_holder: false,
  });

  useEffect(() => {
    const loadBandNames = async () => {
      const res = await getBandNames();
      setBandNames(res);
    };
    loadBandNames();
  }, []);

  const { first_name, last_name, band, email, password } = formData;

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
        <option selected disabled>-- Choose wisely --</option>
        {bandNames.map((name) => (
          <option value={name}>{name}</option>
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
      <small>What...no login?</small>
      <Link to="/register">Register</Link>
      <button type="submit">SUBMIT</button>
    </form>
  );
}