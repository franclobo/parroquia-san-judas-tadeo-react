import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar, Typography } from 'antd';
import { PhoneOutlined, BookOutlined, HeartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import logo from '../images/Tadeo.png';

const items = [
  {
    label: 'Pastoral Social',
    key: 'SubMenu',
    icon: <HeartOutlined />,
    children: [
        {
          label: (
            <NavLink to="/caritas">
              Caritas
            </NavLink>
          ),
          key: 'caritas',
        },
        {
          label: (
            <NavLink to="/juanxxiii">
              Juan XXIII
            </NavLink>
          ),
          key: 'juanxxiii',
        },
        {
          label: (
            <NavLink to="/catequesis">
              Catequesis
            </NavLink>
          ),
          key: 'Catequesis',
        },
    ],
  },
  {
    label: (
      <NavLink to="/noticias">
        Noticias
      </NavLink>
    ),
    key: 'noticias',
    icon: <BookOutlined />,
  },
  {
    label: (
      <NavLink to="/contacto">
        Contacto
      </NavLink>
    ),
    key: 'contacto',
    icon: <PhoneOutlined />,
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className="nav-container">
      <a href="/">
        <div className="logo-container">
          <Avatar src={logo} size="large" className='img-logo'/>
          <div className="title">
            <Typography.Title level={2} className="logo">
              <p>Parroquia <br /> San Judas Tadeo</p>
              <p className='name-parr'>- La Roldós -</p>
            </Typography.Title>
          </div>
        </div>
      </a>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className="menu" />
    </div>
  );
}

export default Navbar
