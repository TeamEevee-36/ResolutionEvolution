import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import { useState } from 'react';
import SignUp from './SignUp';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Cookies from 'js-cookie';

import styles from './_index.css';

//login path should render the login component
//have to pass a link to the path - theres

//define routes within app rather than
const App = () => {
  const [currentUserID, setCurrentUserID] = useState(null);

  useEffect(() => {
    const cookieId = Cookies.get();
    setCurrentUserID(cookieId['user_id']);
  });
  //   return <Login />
  // someone logs in -> ajax req, returned value from ajax req includes currentUserID -> setCurrentUserID = 'returned id'
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path='/login'
          element={
            <Login
              currentUserID={currentUserID}
              setCurrentUserID={setCurrentUserID}
            />
          }
        />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path='/'
          element={
            <Homepage
              currentUserID={currentUserID}
              setCurrentUserID={setCurrentUserID}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
