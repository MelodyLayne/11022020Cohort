import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName);
  };

  return (
    <>
      <h1>Hello 😃!</h1>
      <h2>
        Choose Your Language <span>FR</span> |<span>EN</span>
      </h2>
      <p>Please Fill Out This Form</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
