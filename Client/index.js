//Step 1 : import react, react dom
import React from "react";

/*
//The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to.
import ReactDOM from "react-dom"; 

//How we use react router: general idea is to connect rout of Dom and call the app file that shows our app and when you have that you encompass broswer router to use react router throughout the app
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import App
import App from './App.js'

//We define the root dom using reactDom.createRoot and this allows us to treat app instance as representation of the DOm structure
  //Create a React root for the supplied container and return the root. The root can be used to render a React element into the DOM with render:
const root = ReactDOM.createRoot(document.querySelector('#root'));

//define an instance of the router 
const router = createBrowserRouter([
  //conditional rendering of react components based on the endpoint youre currently at so you dont have to load multiple html files.
  {
    path : "/",
    element: <App />,
    children: []
  }
]);


root.render(
  <RouteProvider router = {router} />
);

*/

import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.js'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
