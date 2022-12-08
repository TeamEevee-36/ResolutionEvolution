/// Important statements
import { TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Eevee from './assets/Eevee.png';

//functional components
const Login = (props) => {
  const navigate = useNavigate();
  //helper function to keep track of changing text
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

  const signIn = () => {
    fetch('/api/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
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
          props.setCurrentUserID(data);

          return navigate('/');
        }
      });
  };
  //this is where we can use other fucntions like useffect
  //return statement that has like JSX define
  return (
    <div className='login-container'>
      <h1>Login</h1>
      <img src={Eevee} width='250px' height='250px'></img>
      <div className='login-text-fields'>
        <h1>Username</h1>
        <TextField value={username} onChange={usernameOnChange}></TextField>
        <h1>Password</h1>
        <TextField value={password} onChange={passwordOnChange}></TextField>
        <div className='signup-buttons'>
          <Button
            sx={{
              backgroundColor: '#8c5383',
              ':hover': { backgroundColor: '#ac72a3' },
            }}
            type='submit'
            value='Submit'
            onClick={signIn}
            variant='contained'
          >
            Submit
          </Button>
          <Button
            sx={{
              backgroundColor: '#8c5383',
              ':hover': { backgroundColor: '#ac72a3' },
            }}
            type='submit'
            value='Submit'
            onClick={() => {
              navigate('/signup');
            }}
            variant='contained'
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

//export our Login functional component
export default Login;
