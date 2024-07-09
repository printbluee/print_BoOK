import React from 'react';
import { TeamOutlined, ReadOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const DropMenu = () => {
  const navigate = useNavigate();

  const items = [
    {
      key: 'categ1',
      label: '커뮤니티',
      icon: <TeamOutlined />,
      children: [
        {
          key: '1',
          label: '포스팅',
          onClick: () => navigate('/')
        },
        {
          key: '2',
          label: '독서일기',
          onClick: () => navigate('/')
        }
      ],
    },
    {
      key: 'categ2',
      label: '베스트 셀러',
      icon: <ReadOutlined />,
      children: [
        {
          key: '3',
          label: '프린트북 랭킹',
          onClick: () => navigate('/bestseller/PrintBookRaking')
        },
        {
          key: '4',
          label: '서점 랭킹',
          onClick: () => navigate('/bestseller/BookStoreRaking')
        }
      ],
    },
    {
      key: 'categ3',
      label: '익명 우체국',
      icon: <MailOutlined />,
      onClick: () => navigate('/')
    },
    {
      key: 'categ4',
      label: '설정',
      icon: <SettingOutlined />,
      children: [
        {
          key: '5',
          label: '편지 보관함',
          onClick: () => navigate('/')
        },
        {
          key: '6',
          label: '노트 보관함',
          onClick: () => navigate('/')
        },
        {
          key: '7',
          label: '책장 보관함',
          onClick: () => navigate('/')
        },
        {
          key: '8',
          label: '회원 정보 수정',
          onClick: () => navigate('/')
        }
      ],
    }
  ];

  return (
    <Menu
      style={{
        position: 'absolute',
        zIndex: 1,
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['categ1']}
      mode="inline"
      items={items}
    />
  );
};

export default DropMenu;