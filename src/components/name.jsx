// NameInput.js
import React from 'react';

const NameInput = ({ name, handleChange }) => (
  <div>
    <label>Name:</label>
    <input
      type="text"
      name="name"
      value={name}
      onChange={handleChange}
    />
  </div>
);

export default NameInput;
