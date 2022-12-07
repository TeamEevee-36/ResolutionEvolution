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
  // looping through array of resolution objects
  for (let i = 0; i < props.resolutionData.length; i++) {
    props.resolutionData[i].days_todo.forEach((ele) => {
      daysArr[ele].push(props.resolutionData[i]);
    });
  }

  return (
    <>
      <Day resList={daysArr['Monday']} />
      <Day resList={daysArr['Tuesday']} />
      <Day resList={daysArr['Wednesday']} />
      <Day resList={daysArr['Thursday']} />
      <Day resList={daysArr['Friday']} />
      <Day resList={daysArr['Saturday']} />
      <Day resList={daysArr['Sunday']} />
    </>
  );
};

export default WeeklyCalendar;
