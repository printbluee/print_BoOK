import React, { useState } from 'react';
import { Card } from 'antd';
import { BookOutlined, BookFilled } from '@ant-design/icons';

const CardNewImage = (props) => {

  const [BookMark, setBookMark] = useState(false)

  const handleBookMarkClick = () => {
    setBookMark(!BookMark)
  };

  return (
    <Card hoverable style={{ width: '100%', margin: '10px' }}>
      <div style={{ display: 'flex' }}>
        {/* 왼쪽 영역: 설명 */}
        <div style={{ width: '250px', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
        <div style={{ margin: 'auto 15px', textAlign: 'left' }}>
          <p style={{ color: 'gray', wordBreak: 'keep-all' }}>{props.description}</p>
          <p style={{ color: 'gray' }}>{props.author}</p>
          <div style={{ display: 'flex' }}>
            {(!BookMark) ? 
              <BookOutlined type='button' onClick={handleBookMarkClick} /> 
              : <BookFilled type='button' onClick={handleBookMarkClick} />}
          </div>
        </div>
      </div>

        {/* 오른쪽 영역: 사진 */}
        <div style={{ width: '250px', flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={props.src}
            alt={props.title}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
      </div>
    </Card>
  );
};

export default CardNewImage;
