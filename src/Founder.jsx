import React from 'react';
import './Founder.css';
import homeImage1 from './assets/unsplash.png';

const Founder = () => {
  return (
    <div className='home_section'>
      <img src={homeImage1} alt='Image' className='home_image' />
      <div className='text_container_10'>
        <div className='home_text'>
          It's time to
        </div>
        <div className="home2_text">
          know us
        </div>
      </div>
    </div>
  );
}

export default Founder;
