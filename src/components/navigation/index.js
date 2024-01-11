import React, { useState } from 'react';
import { Menu } from 'antd';
import { HeartOutlined, UserOutlined, WechatOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from  './index.module.css';
const items = [
   {
      label: '推荐',
      key: 'recommend',
      icon: <HeartOutlined />
   },
   {
      label: '消息',
      key: 'message',
      icon: <WechatOutlined />
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

  const [current, setCurrent] = useState('recommend');
  const onClick = (e) => {
    // eslint-disable-next-line default-case
    switch( e.key ) {
      case 'personalInformation':
        navigation('/main/person');
        setCurrent(e.key);
        break;
      case 'recommend':
        navigation('/main/recommend');
        setCurrent(e.key);
        break;
      case 'message': 
        navigation('/main/message');
        setCurrent(e.key)
    }
  };
  return (
    <>
       <Menu 
         theme="dark"
         onClick={onClick} 
         selectedKeys={[current]} 
         mode="horizontal" 
         items={items}  
         // className='navigation'
         className={styles.navigation}
         />
    </>
  );
};
export default Nav ;