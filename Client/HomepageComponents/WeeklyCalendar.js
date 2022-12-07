import React, { useEffect, useState } from 'react';
import Day from './Day';
const WeeklyCalendar = (props) => {
  const [trigger, setTrigger] = useState(false);
  const [single, setSingle] = useState({});
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
    // console.log('props.resolutionData: ', props.resolutionData);

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
      // console.log('resdata3', resolutionData3);

      // console.log('days objectt?: ', props.resolutionData[i].days_todo);
      //console.log('type', typeof props.resolutionData[i].days_todo);
      resolutionData3.forEach((ele) => {
        daysArr[ele].push(props.resolutionData[i]);
      });
    }
    // console.log(daysArr);
    // console.log('daysArr', daysArr['Friday']);
    setTrigger(true);
    setSingle(daysArr);
  }, []);
  return (
    <>
      {trigger ? (
        <div id='week-cal'>
          <Day day='Monday' resList={single['Monday']} />
          <Day day='Tuesday' resList={single['Tuesday']} />
          <Day day='Wednesday' resList={single['Wednesday']} />
          <Day day='Thursday' resList={single['Thursday']} />
          <Day day='Friday' resList={single['Friday']} />
          <Day day='Saturday' resList={single['Saturday']} />
          <Day day='Sunday' resList={single['Sunday']} />
        </div>
      ) : null}
    </>
  );
};

export default WeeklyCalendar;
