import React from 'react';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SignUp = () => {
  const useInput = (init) => {
    const [value, valueOnChange] = useState(init);
    const onChange = (e) => {
      valueOnChange(e.target.value);
    };
    //correspond to the useInput outputs
    return [value, onChange];
  };
  const [username, usernameOnChange] = useInput('');
  const [password, passwordOnChange] = useInput('');
  const [email, emailOnChange] = useInput('');

  const sendInfo = () => {
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        if (data === 'user not found') {
          alert('Account not found, please sign up');
          return navigate('/signup');
        } else if (data === 'incorrect password') {
          return alert('Password is incorrect');
        } else {
          props.setCurrentUserID(data.id);
          return navigate('/');
        }
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <div className='signup-text-fields'>
        <TextField value={username} onChange={usernameOnChange}></TextField>
        <TextField value={email} onChange={emailOnChange}></TextField>
        <TextField value={password} onChange={passwordOnChange}></TextField>
        <Button type='submit' value='Submit'>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
