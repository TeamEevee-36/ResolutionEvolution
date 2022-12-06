import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';

//login path should render the login component
  //have to pass a link to the path - theres 

  //define routes within app rather than 
const App = () => {
//   return <Login />
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App;