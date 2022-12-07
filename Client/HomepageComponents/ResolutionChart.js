import React, { useEffect, useState } from 'react';

const ResolutionChart = (props) => {
  //define resolution data from Props. Should be an array of resolutions
  const resolutionData = props.resolutionData;
  console.log('RESCHART data', resolutionData);
  const tableInfoArray = [];

  useEffect(() => {
    for (let i = 0; i < resolutionData.length; i++) {
      tableInfoArray.push(
        <tr>
          <td>resolutionData[i].category_name</td>
          <td>resolutionData[i].resolution_name</td>
          <td>resolutionData[i].resolution_desc</td>
          <td>resolutionData[i].days_todo</td>
        </tr>
      );
    }
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
          </tr>
        </thead>
        <tbody>{tableInfoArray}</tbody>
      </table>
    </>
  );
};

export default ResolutionChart;
