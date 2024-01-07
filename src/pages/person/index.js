import React, { useState } from "react";
import { Descriptions, Image } from 'antd';
import ProductionInfo from "../../components/productinfo";
import './index.css';

const Person  = () => {

   const [userInfo , setUserInfo ] = useState({
      userName: '~~~~~~~',
      telephone: '~~~~~~~',
      live: '~~~~~~~',
      remark: '~~~~~~~',
      address: '~~~~~~~'
   })

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

    return (
       <div className="person-container">
            <div className="message-container">
            <Image
                    width={150}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                 <div className="user-info">
                 <Descriptions title="User Info" items={items}/>
                 </div>
            </div>
            <div className="my-rental-list">
               <ProductionInfo title={'我的租凭'}/>
            </div>
            <div className="my-hire-list">
               <ProductionInfo title={'我的出租'}/>
            </div>
       </div>
    )
}

export default Person;