import React, { useState } from 'react';
import { Col } from 'antd';

const ImageList = (props) => {
  
  const [heart, setheart] = useState(false)

  const handleheartClick = () => {
    setheart(!heart)
  };

  return (
    <Col span={6} className="image-container" style={{ margin: '5px 0' }}>
      <img
        src={props.src}
        alt={props.alt}
        style={{ height: '225px', width: '150px', objectFit: 'cover' }}
      />
      <div className="overlay">
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{ marginBottom: '5px' }}>💌</div>
          <div style={{ marginBottom: '5px' }}>
            {props.alt.length > 20 ? `${props.alt.substring(0, 20)}...` : props.alt}
          </div>
          <div style={{ marginBottom: '5px' }}>
            {props.author.length > 20 ? `${props.author.substring(0, 15)} ..` : props.author}
          </div>
          <div>
            {!heart ? (
              <span onClick={handleheartClick}>🤍</span>
            ) : (
              <span onClick={handleheartClick}>💙</span>
            )}
          </div>
        </div>

      </div>
    </Col>
  );
};

export default ImageList;
