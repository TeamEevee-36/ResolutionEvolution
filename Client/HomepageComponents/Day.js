import React, {useEffect, useState} from 'react';

const Day = (props) => {
  const resList = props.resList;
  //loop through and display the name and status for each of the elements 
  const dayArr = [];
  resList.forEach(ele => {
    // push to array -> 1. name 2. ternary operator containing three options but value will be based on database

    const optionsSet = new Set(['in progress', 'not started', 'completed']);
    
    dayArr.push(
      <>
        <span>{ele.resolution_name}</span>
        <select>
          <option></option>
          <option></option>
          <option></option>
        </select>
      </>
    )
    // for status: if conditional to check if started, not started, done; depending on this, set value of dropdown box
    // initialize an empty array

  })

  return(

  )

}

export default Day;