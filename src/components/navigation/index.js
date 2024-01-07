import React, { useState } from 'react';
import { Menu } from 'antd';
import { HeartOutlined, UserOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';
import './index.css';
const items = [
   {
      label: '推荐',
      key: 'recommend',
      icon: <HeartOutlined />
   },
   {
      label: '商城',
      key: 'shopping',
      icon: <HeartOutlined />
   },
   {
    label: '个人中心',
    key: 'im',
    icon: <HeartOutlined />
   },
   {
    label: '个人中心',
    key: 'personalInformation',
    icon: <UserOutlined />
   }

];
const Nav = () => {

  const navigation = useNavigate();

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    switch( e.key ) {
      case 'personalInformation':
        navigation('/main/person');
        setCurrent(e.key);
        break;
    }
  };
  return (
    <>
       <Menu 
         onClick={onClick} 
         selectedKeys={[current]} 
         mode="horizontal" 
         items={items}  
         className='navigation'
         />
    </>
  );
};
export default Nav ;