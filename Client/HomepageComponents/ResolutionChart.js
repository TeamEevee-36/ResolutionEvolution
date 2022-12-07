import React, { useEffect,useLayoutEffect,useState } from 'react';

const ResolutionChart = (props) => {
  //define resolution data from Props. Should be an array of resolutions
  const resolutionData = props.resolutionData;
  //console.log('RESCHART data', resolutionData);
  const tableInfoArray = [];
  const [fullChart, setFullChart] = useState([]);
  //synthetic events in react we can use e to reference the exact button without having to name it specically as an argument in the function definion 
    //check by console.logging and looking at E after you select
  const changeProgress = async (e) => {
    console.log('this is e', e.target.value);
    console.log('e.target.id: ', e.target.id);
    //e.target.value will reflect the changed option progress value when a user selects an option from the selection dropdown
    //two pieces of information needed for the fetch request are the target value: e.target.value, and resolution_id : e.target.id - named below
    await fetch('/api/updateResolution',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        resolution_id: e.target.id,
        progressUpdate: e.target.value,
      }),
    });
    /*
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
        days_todo: [...daysCheckedArr],
        resolution_status: 'In Progress',
      }),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setResolutionData(data);
        setTrigger(false);
      });
      */
    
  };

  const deleteRes = async (e) => {
    console.log('e.target.id: ', e.target.id);
    await fetch('/api/deleteResolution',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        resolution_id: (e.target.id).slice(1),
      }),
    });
  };

  useLayoutEffect(() => {
    for (let i = 0; i < resolutionData.length; i++) {
        //define variable for sliced todo data to take curly braces off
      let resolutionData2 = props.resolutionData[i].days_todo.slice(1, props.resolutionData[i].days_todo.length - 1).split(',');

      const resolutionData3 = resolutionData2.map((ele) => {
        return ele.slice(1, ele.length - 1);
      });

      const choices = ['not started', 'in progress', 'completed'];
      const optionsArr = [];

      choices.forEach((choice) => {
        if (choice === resolutionData[i].resolution_status) {
          optionsArr.push(
            <option value={choice} selected>
              {choice}
            </option>
          );
        } else {
          optionsArr.push(<option value={choice}>{choice}</option>);
        }
      });

      tableInfoArray.push(
        <tr>
          <td>{resolutionData[i].category_name}</td>
          <td>{resolutionData[i].resolution_name}</td>
          <td>{resolutionData[i].resolution_desc}</td>
          <td>{resolutionData3.join(', ')}</td>
          <td><select id={resolutionData[i].id} onChange ={changeProgress}>{optionsArr}</select></td>
          <td><button id={`D${resolutionData[i].id}`} onClick={deleteRes}>X</button></td>
        </tr>
      );
      // console.log(tableInfoArray);
    }
    setFullChart(tableInfoArray);
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Resolution Name</th>
            <th>Description</th>
            <th>Days of the Week</th>
            <th>Progress</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{fullChart}</tbody>
      </table>
    </>
  );
};

export default ResolutionChart;
