/// Important statements
import { TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

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
    fetch('/api', {
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
          props.setCurrentUserID(data.id);
          return navigate('/');
        }
      });
  };
  //this is where we can use other fucntions like useffect
  //return statement that has like JSX define
  return (
    <div>
      <h1>Login</h1>
      <div className='login-text-fields'>
        <TextField value={username} onChange={usernameOnChange}></TextField>
        <TextField value={password} onChange={passwordOnChange}></TextField>
        <Button type='submit' value='Submit' onClick={signIn}>
          Submit
        </Button>
      </div>
    </div>
  );
};

//export our Login functional component
export default Login;
