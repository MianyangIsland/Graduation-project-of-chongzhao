import React, { useState } from "react";
import { Descriptions, Image, Modal, Button, Menu } from 'antd';
import ProductionInfo from "../../components/productinfo";
import PublishProduct from "../../components/publish/publish_product";
import PublishRequirement from "../../components/publish/publish_requirements";
import styles from  './index.module.css';

const Person  = () => {

   const [userInfo , setUserInfo ] = useState({
      userName: '~~~~~~~',
      telephone: '~~~~~~~',
      live: '~~~~~~~',
      remark: '~~~~~~~',
      address: '~~~~~~~'
   })
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [navValue,setNavValue] = useState('publish_requirements');

    const items = [
        {
            key: '1',
            label: 'UserName',
            children: <p>{userInfo.userName}</p>,
          },
          {
            key: '2',
            label: 'Telephone',
            children: <p>{userInfo.telephone}</p>,
          },
          {
            key: '3',
            label: 'Live',
            children: <p>{userInfo.live}</p>,
          },
          {
            key: '4',
            label: 'Remark',
            children: <p>{userInfo.remark}</p>,
          },
          {
            key: '5',
            label: 'Address',
            children: <p>{userInfo.address}</p>,
          },
    ]

    // 发布信息的模块
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const NavItems = [
      {
        label: '发布需求',
        key: 'publish_requirements',
      },
      {
        label: '发布商品',
        key: 'publish_product'
      }
    ];
    const handNavClick = (e) => {
      setNavValue(e.key);
    }

    return (
       <div className={styles.person_container}>
            <div className={styles.message_container}>
            <Image
                    width={150}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                 <div className={styles.user_info}>
                 <Descriptions title="User Info" items={items}/>
                 </div>
            </div>
            <div className={styles.my_rental_list}>
               <ProductionInfo title={'我的租凭'}/>
            </div>
            <div className={styles.my_hire_list}>
               <ProductionInfo title={'我的出租'}/>
            </div>
            <Button 
              style={{
                position: 'absolute',
                right:0,
                top: 100
              }}
              type="primary" 
              onClick={showModal}
              >
              发布
            </Button>
            <Modal title="发布中心" open={isModalOpen} onCancel={handleCancel}  footer={null}>
               <div className={styles.publish_container}>
                  <div className={styles.publish_navigation}>
                      <Menu 
                      style={{
                        display:'flex',
                        justifyContent: 'space-around'
                      }}
                      items={NavItems}
                      mode="horizontal"
                      onClick={handNavClick}
                      selectedKeys={[navValue]}
                      />
                      {
                        navValue === 'publish_requirements' 
                          ? <PublishRequirement/> 
                          : <PublishProduct/>
                      }
                  </div>
               </div>
            </Modal>
       </div>
    )
}

export default Person;