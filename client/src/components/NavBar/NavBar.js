import React, { useState } from 'react';
import logo_ver from '../img/logo_ver.png';
import DropMenu from './DropMenu'
import { MenuOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';


const NavBar = () => {
  
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
          <MenuOutlined onClick={handleMenuClick}/>
          {Menu && 
            <div>
              <DropMenu />
            </div>
          }
        </Col>
        <Col lg={4} md={6} sm={12} xs={24}>
          <a href="/">
            <img style={{ maxWidth: "100%" }} src={logo_ver} alt="Logo"></img>
          </a>
        </Col>
        <Col lg={4} md={6} sm={12} xs={24}>
          <a style={{ margin: '0 10px' }} href="/login">로그인</a>
          <a href="/sign">회원가입</a>
        </Col>
      </Row>
    </div>
  );
};

export default NavBar;
