import React, { useEffect, useState } from 'react';
import Day from './Day';
const WeeklyCalendar = (props) => {
  const daysArr = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  };

  //clean to-do
  //slice two curly braces off to_do.slice(1, to_do.length-1)
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     await fetch('/api/getresolutions')
  //       .then((data) => data.json())
  //       .then((data) => {
  //         //expected array of resolutions
  //         console.log('WeeklyCalendar data', data);
  //         setResolutionDayData(data);
  //       })
  //       .catch((err) => console.log('Error in homepage fetch'));
  //   };
  //   fetchdata();
  // }, []);

  useEffect(() => {
    console.log('props.resolutionData: ', props.resolutionData);

    //console.log('resdata2', resolutionData3);
    // looping through array of resolution objects
    for (let i = 0; i < props.resolutionData.length; i++) {
      let resolutionData2 = props.resolutionData[i].days_todo
        .slice(1, props.resolutionData[i].days_todo.length - 1)
        .split(',');

      //split at comma
      //foreach element in new arr slice both sets of quotes ele.slice(1, ele.length-1)
      // const resolutionData3 = [];
      const resolutionData3 = resolutionData2.map((ele) => {
        return ele.slice(1, ele.length - 1);
        // console.log(ele);
      });
      console.log('resdata3', resolutionData3);

      // console.log('days objectt?: ', props.resolutionData[i].days_todo);
      //console.log('type', typeof props.resolutionData[i].days_todo);
      resolutionData3.forEach((ele) => {
        daysArr[ele].push(props.resolutionData[i]);
      });
    }
    console.log(daysArr);
  }, []);

  return (
    <>
      <h1>Checking load time for weekly calendar</h1>
      <Day day='Monday' resList={daysArr['Monday']} />
      <Day day='Tuesday' resList={daysArr['Tuesday']} />
      <Day day='Wednesday' resList={daysArr['Wednesday']} />
      <Day day='Thursday' resList={daysArr['Thursday']} />
      <Day day='Friday' resList={daysArr['Friday']} />
      <Day day='Saturday' resList={daysArr['Saturday']} />
      <Day day='Sunday' resList={daysArr['Sunday']} />
    </>
  );
};

export default WeeklyCalendar;
