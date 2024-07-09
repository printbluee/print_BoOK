import React from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

const Login = () => {
  return (
    <div style={{ width: '500px', margin: '80px auto', textAlign: 'center' }}>
      {/* 입력 필드 */}
      <div style={{ margin: '0 auto' }}>
        <Input style={{ borderRadius: '25px', color: 'white', backgroundColor: '#4191CC', marginBottom: '10px' }}
          size="large"
          placeholder="이메일"
          prefix={<UserOutlined style={{ margin: '7px' }} />}
          className="white-placeholder" />
        <Input style={{ borderRadius: '25px', color: 'white', backgroundColor: '#4191CC' }}
          size="large"
          placeholder="비밀번호"
          prefix={<LockOutlined style={{ margin: '7px' }} />}
          className="white-placeholder" />
      </div>

      {/* 구분선 */}
      <div style={{ height: '1px', backgroundColor: 'gray', margin: '20px 0 10px 0' }} />

      {/* 회원가입 / 아이디찾기 / 비밀번호 찾기 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
        <a style={{ flex: '1', textAlign: 'left' }}>회원가입</a>
        <div style={{ flex: '1', textAlign: 'right' }}>
          <a>아이디</a>
          <span>•</span>
          <a>비밀번호찾기</a>
        </div>
      </div>

      {/* 로그인 버튼 */}
      <div style={{ width: '500px', margin: '20px auto', textAlign: 'center' }}>
        <Button type="primary" style={{ height: '45px', width: '500px', backgroundColor: '#4191CC' }}>로그인</Button>
      </div>
    </div>
  );
};

export default Login;