import React from 'react'
import banner_img from '../../img/banner_img.png';

const MainImage = () => {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      margin: '0 auto',
    }}>
      <div style={{ textAlign: 'center', lineHeight: '400px' }}>
        <img style={{ width: "100%", lineHeight: '400px', margin: '0 auto' }} src={banner_img} alt="banner"></img>
      </div>
    </div >
  );
};

export default MainImage;