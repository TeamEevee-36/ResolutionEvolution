import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import { useState } from 'react';
import SignUp from './SignUp';

//login path should render the login component
//have to pass a link to the path - theres

//define routes within app rather than
const App = () => {
  //   return <Login />
  const [currentUserID, setCurrentUserID] = useState(null);
  // someone logs in -> ajax req, returned value from ajax req includes currentUserID -> setCurrentUserID = 'returned id'
  console.log(currentUserID); //12
  return (
    <>
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
      </Routes>
      {/* <Routes>
        <Route
          path='/'
          element={
            <Homepage
              currentUserID={currentUserID}
              setCurrentUserID={setCurrentUserID}
            />
          }
        />
      </Routes> */}
    </>
  );
};

export default App;
