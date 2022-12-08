import React from 'react';
import Drew from '../assets/Drew.jpg';
import Phoebe from '../assets/Phoebe.png';
import Rebecca from '../assets/Rebecca.jpg';
import Cavin from '../assets/CavinJolteon.jpg';

const Motivation = () => {
  return (
    <div className='motivation'>
      <img
        className='photo-motivation'
        src={Drew}
        height='300px'
        width='400px'
      ></img>
      <h2 className='motivational-phrase'>
        Drew says: "Get out there and follow your dreams!"
      </h2>
      <img
        className='photo-motivation'
        src={Phoebe}
        height='300px'
        width='400px'
      ></img>
      <h2 className='motivational-phrase'>
        Phoebe says: "Get out there and follow your dreams!"
      </h2>
      <img
        className='photo-motivation'
        src={Rebecca}
        height='300px'
        width='400px'
      ></img>
      <h2 className='motivational-phrase'>
        Rebecca says: "Get out there and follow your dreams!"
      </h2>
      <img
        className='photo-motivation'
        src={Cavin}
        height='300px'
        width='400px'
      ></img>
      <h2 className='motivational-phrase'>
        Cavin says: "Get out there and follow your dreams!"
      </h2>
    </div>
  );
};

export default Motivation;
