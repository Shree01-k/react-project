import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleValidation = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(regex.test(email));
  };

  return (
    <div>
      <h2>Contact Page</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleValidation}>Validate Email</button>
      {isValid !== null && (
        <p>{isValid ? 'Valid Email' : 'Invalid Email'}</p>
      )}
    </div>
  );
}

export default Contact;
