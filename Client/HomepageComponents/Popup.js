import React from 'react';
import { useRef } from 'react';

function Popup(props) {
  const someName = useRef(null);
  const resolution = useRef('');
  const resCat = useRef('');
  const resDesc = useRef('');

  const checkingFormAns = (e) => {
    e.preventDefault();

    const daysCheckedArr = [];
    console.log('check: ', e.target[4].checked);
    for (let i = 3; i < 10; i++) {
      if (e.target[i].checked) daysCheckedArr.push(e.target[i].value);
    }

    fetch('/api/resolutions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        resolution_name: resolution.current.value,
        resolution_desc: resDesc.current.value,
        category_name: resCat.current.value,
        user_id: props.user_id,
        days_todo: daysCheckedArr,
        resolution_status: 'In Progress',
      }),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  //trigger should be a boolean value indicating buttonclick of "add resolution
  return props.trigger ? (
    <div className='popup-container'>
      <div className='popup'>
        <button onClick={() => props.setTrigger(false)}>close</button>
        <form onSubmit={checkingFormAns}>
          <span>Resolution Name: </span>
          <input ref={resolution} type='text' />{' '}
          {/* someName.current.value to obtain value */}
          <span>Resolution category: </span> <input type='text' ref={resCat} />
          <span>Resolution Description: </span>{' '}
          <input type='text' ref={resDesc} />
          <div className='popup-days'>
            <span>
              Monday:
              <input type='checkbox' value='Monday' />
            </span>
            <span>
              Tuesday: <input type='checkbox' value='Tuesday' />
            </span>
            <span>
              Wednesday:
              <input type='checkbox' value='Wednesday' />
            </span>
            <span>
              Thursday:
              <input type='checkbox' value='Thursday' />
            </span>
            <span>
              Friday:
              <input type='checkbox' value='Friday' />
            </span>
            <span>
              Saturday:
              <input type='checkbox' value='Saturday' />
            </span>
            <span>
              Sunday:
              <input type='checkbox' value='Sunday' />
            </span>
            <button type='submit'>Add Resolution</button>
          </div>
        </form>
      </div>
    </div>
  ) : //returning null if trigger is not true
  null;
}

export default Popup;

//span is similar to p but its usually its own thing. Span will place elemetns on the same line and wont
//kick it to the next line

//creating the input type =text will automatically create a box for the input
