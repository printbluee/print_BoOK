import React from 'react'
import { Input } from 'antd';

const Join = () => {
  return (
    <div style={{ width: '500px', margin: '80px auto', textAlign: 'center' }}>
      <div style={{ width: '500px', margin: '20px auto', textAlign: 'center' }}>
        <Input style={{ color: 'white', backgroundColor: '#4191CC', marginBottom: '10px' }}
          size="large"
          placeholder="이메일"
          className="white-placeholder" />
      </div>
    </div>
  );
};

export default Join;