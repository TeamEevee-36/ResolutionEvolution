/// Important statements
import React, { useEffect, useState } from 'react';
import ResolutionChart from './HomepageComponents/ResolutionChart';
import WeeklyCalendar from './HomepageComponents/WeeklyCalendar';
import Popup from './HomepageComponents/Popup';
import Cookies from 'js-cookie';
import Motivation from './HomepageComponents/Motivation';

//functional components //props shoould be assumed as an object so we can send down multiple variables
const Homepage = (props) => {
  const user_id = props.currentUserID;
  //retured data from fetch will be an object so initally set state to be an empty array
  const [resolutionData, setResolutionData] = useState([]);
  // popup depends on trigger value
  const [trigger, setTrigger] = useState(false);
  const [trigger2, setTrigger2] = useState(false);
  const [trigger3, setTrigger3] = useState(false);

  //useEffect essentially is a callback for the compnentDidMount event listener
  useEffect(() => {
    //add a resolution : resolution category name, description, days of the week you wold perform them on
    //perform fetch request. The endpoint below is alloewed bc of proxy which the server will be listening for on the assigned port. Proxy is determine in the webpacl.config
    //assumption for returned data will be a getALL from database where userID = user_id passed from props
    const fetchdata = async () => {
      await fetch('/api/getresolutions')
        .then((data) => data.json())
        .then((data) => {
          //expected array of resolutions
          console.log('homepage data', data);
          setResolutionData(data);
          setTrigger2(true);
          setTrigger3(true);
        })
        .catch((err) => console.log('Error in homepage fetch'));
    };
    fetchdata();
  }, []);

  //button pop up -
  // console.log('checking homepage re-renders')
  //return statement that has like JSX define. Need to wrap in angular brackets as 1 parent element is needed
  return (
    <>
      <h1 className='big-title'> Welcome to Resolution Evolution </h1>
      <button className='add-button' onClick={() => setTrigger(true)}>
        {' '}
        Add New Resolution{' '}
      </button>
      {trigger3 ? (
        <ResolutionChart user_id={user_id} resolutionData={resolutionData} />
      ) : null}
      {trigger ? (
        <Popup trigger={trigger} setTrigger={setTrigger} user_id={user_id} />
      ) : null}

      <h1 className='cal-title'>Your Weekly Calendar</h1>
      {trigger2 ? (
        <WeeklyCalendar resolutionData={resolutionData} userID={user_id} />
      ) : null}
      <Motivation />
    </>
  );
};

//export our Homepage functional component
export default Homepage;
