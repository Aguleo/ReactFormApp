// EmailInput.js
import React from 'react';

const EmailInput = ({ email, handleChange }) => (
  <div>
    <label>Email:</label>
    <input
      type="email"
      name="email"
      value={email}
      onChange={handleChange}
    />
  </div>
);

export default EmailInput;
