// PhoneInput.js
import React from 'react';

const PhoneInput = ({ phone, handleChange }) => (
  <div>
    <label>Phone Number:</label>
    <input
      type="tel"
      name="phone"
      value={phone}
      onChange={handleChange}
    />
  </div>
);

export default PhoneInput;
