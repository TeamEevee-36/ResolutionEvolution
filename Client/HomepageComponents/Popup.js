import React from 'react'

function Popup (props) {
  
  
  
  //trigger should be a boolean value indicating buttonclick of "add resolution"
  return(props.trigger) ? (
    <div >
      <button onClick={() => props.setTrigger(false)}>close</button>
      <span>Resolution Name: </span><input type = "text"/>
      <span>Resolution Description: </span> <input type = "text"/>
      <span>Resolution Description: </span> <input type = "text"/>
      <span>Monday: </span> <input type = "checkbox"/>
      <span>Tuesday: </span> <input type = "checkbox"/>
      <span>Wednesday: </span> <input type = "checkbox"/>
      <span>Thursday: </span> <input type = "checkbox"/>
      <span>Friday: </span> <input type = "checkbox"/>
      <span>Saturday: </span> <input type = "checkbox"/>
      <span>Sunday: </span> <input type = "checkbox"/>
    </div>
    //returning null if trigger is not true 
  ) : null;
}

export default Popup;


//span is similar to p but its usually its own thing. Span will place elemetns on the same line and wont
//kick it to the next line

//creating the input type =text will automatically create a box for the input