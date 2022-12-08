import React, { useEffect, useState } from 'react';

const Day = (props) => {
  const resList = props.resList;
  const [resEle, setResEle] = useState([]);
  //loop through and display the name and status for each of the elements
  const dayArr = [];
  const dayCreator = () => {
    // console.log('resList: ', resList);
    resList.forEach((ele) => {
      // push to array -> 1. name 2. ternary operator containing three options but value will be based on database

      // const choices = ['not started', 'in progress', 'completed'];
      // const optionsArr = [];

      // choices.forEach((choice) => {
      //   if (choice === resList.resolution_status) {
      //     optionsArr.push(
      //       <option value={choice} selected>
      //         {choice}
      //       </option>
      //     );
      //   } else {
      //     optionsArr.push(<option value={choice}>{choice}</option>);
      //   }
      // });

      dayArr.push(
        <>
          <li>{ele.resolution_name}</li>
          {/* <select>{optionsArr}</select> */}
        </>
      );
      // for status: if conditional to check if started, not started, done; depending on this, set value of dropdown box
      // initialize an empty array
    });
  };

  useEffect(() => {
    console.log('resList: ', props.resList);
    dayCreator();
    setResEle(dayArr);
    console.log('dayArr', dayArr);
  }, []);

  // console.log('dayarr', dayArr);

  return (
    <div className='day-cal'>
      <ul>
        <h3 className='day-title'>{props.day}</h3>

        {resEle}
      </ul>
    </div>
  );
};

export default Day;
