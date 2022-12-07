import React from 'react';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import Flareon from './assets/Flareon.png';

const SignUp = () => {
  const navigate = useNavigate();
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
    fetch('/api/createAccount', {
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
        // alert('Account created');
        alert(data);
        if (data === 'Account created! Please login') {
          navigate('/login');
        }
      });
  };

  return (
    <div className='sign-up-container'>
      <h1>Sign Up</h1>
      <img src={Flareon} width='350px' height='200px'></img>
      <div className='signup-text-fields'>
        <h1>Username</h1>
        <TextField value={username} onChange={usernameOnChange}></TextField>
        <h1>Email</h1>
        <TextField value={email} onChange={emailOnChange}></TextField>
        <h1>Password</h1>
        <TextField value={password} onChange={passwordOnChange}></TextField>
        <div className='signup-buttons'>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#8c5383',
              ':hover': { backgroundColor: '#ac72a3' },
            }}
            type='submit'
            value='Submit'
            onClick={sendInfo}
          >
            Submit
          </Button>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#8c5383',
              ':hover': { backgroundColor: '#ac72a3' },
            }}
            type='submit'
            value='Submit'
            onClick={() => navigate('/login')}
          >
            Back to Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
