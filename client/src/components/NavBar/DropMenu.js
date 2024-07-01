import React from 'react'
import { TeamOutlined, ReadOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
  {
    key: 'categ1',
    label: '커뮤니티',
    icon: <TeamOutlined />,
    children: [
      {
        key: '1',
        label: (
          <a href='/'>
            포스팅
          </a>
        )
      },
      ,
      {
        key: '2',
        label: (
          <a href='/'>
            독서일기
          </a>
        ),
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
        label: (
          <a href='/bestseller/PrintBookRaking'>
            프린트북 랭킹
          </a>
        )
      },
      {
        key: '4',
        label: (
          <a href='/bestseller/BookStoreRaking'>
            서점 랭킹
          </a>
        )
      }
    ],
  },
  {
    key: 'categ3',
    label: '익명 우체국',
    icon: (
      <a href='/'>
        <MailOutlined />
      </a>
    )
  },
  {
    key: 'categ4',
    label: '설정',
    icon: <SettingOutlined />,
    children: [
      {
        key: '5',
        label: (
          <a href='/'>
            편지 보관함
          </a>
        )
      },
      {
        key: '6',
        label: <a href='/'>
          노트 보관함
        </a>
      },
      {
        key: '7',
        label: <a href='/'>
          책장 보관함
        </a>
      },
      {
        key: '8',
        label: <a href='/'>
          회원 정보 수정
        </a>
      }
    ],
  }
];

const DropMenu = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
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