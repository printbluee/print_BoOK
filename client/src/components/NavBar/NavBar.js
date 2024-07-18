import React, { useState } from 'react';
import logo_ver from '../img/logo_ver.png';
import DropMenu from './DropMenu'
import { MenuOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [Menu, setMenu] = useState(false)

  const handleMenuClick = () => {
    setMenu(!Menu)
  };

  return (
    <div style={{
      width: '80%',
      margin: '0 auto',
      lineHeight: '80px',
      textAlign: 'center',
    }}>
      <Row gutter={[10, 10]} justify="space-between" align="middle">
        <Col lg={4} md={6} sm={12} xs={24}>
          <MenuOutlined onClick={handleMenuClick} style={{ fontSize: '22px' }}/>
          {Menu && 
            <div>
              <DropMenu />
            </div>
          }
        </Col>
        <Col lg={4} md={6} sm={12} xs={24}>
          <a href="/print_BoOK">
            <img style={{ maxWidth: "100%" }} src={logo_ver} alt="Logo"></img>
          </a>
        </Col>
        <Col lg={4} md={6} sm={12} xs={24}>
          <a style={{ margin: '0 10px' }} onClick={() => navigate('/login')}>로그인</a>
          <a onClick={() => navigate('/join')}>회원가입</a>
        </Col>
      </Row>
    </div>
  );
};

export default NavBar;
