import { Button } from '@mui/material';
import Cookies from 'js-cookie';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const signOutFunc = () => {
    Cookies.remove('user_id');
    navigate('/login');
  };
  return (
    <div id='navbar'>
      <h1>Resolution Evolution</h1>
      <button className='signout-btn' onClick={signOutFunc}>
        Sign Out
      </button>
    </div>
  );
};

export default Navbar;
