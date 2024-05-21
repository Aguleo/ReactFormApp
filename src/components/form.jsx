// import { useState } from "react";
// import Button from "./button";

// MyForm.js
import React, { useState } from 'react';
import NameInput from './name';
import EmailInput from './email';
import PhoneInput from './phone';

const MyForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = formValues;
    if (!name || !email || !phone) {
      alert('Empty input');
      return;
    }
    alert(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
  };

  return (
    <form className='btn' onSubmit={handleSubmit}>
      <NameInput name={formValues.name} handleChange={handleChange} />
      <EmailInput email={formValues.email} handleChange={handleChange} />
      <PhoneInput phone={formValues.phone} handleChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;

