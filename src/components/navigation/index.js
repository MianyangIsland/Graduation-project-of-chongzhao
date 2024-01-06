import React, { useState } from 'react';
import { Menu } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
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
    label: '发布商品',
    key: '123',
    icon: <HeartOutlined />
   }

];
const Nav = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    setCurrent(e.key);
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