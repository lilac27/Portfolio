import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message"></textarea>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
};

export default Contact;