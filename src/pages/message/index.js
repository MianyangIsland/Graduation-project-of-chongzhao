import React from "react";
import { Avatar } from "antd";
import ChatBox from "../../components/chatbox";
import styles from  './index.module.css';

const Message = () => {

    const messageList = [
        {
           id: 1,
           src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
        },
        {
            id: 2,
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
         },
         {
            id: 3,
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
         },
         {
            id: 4,
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
         },
         {
            id: 5,
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
         },
         {
            id: 6,
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
         },
         {
            id: 7,
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
         },
         {
            id: 8,
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
         },
         {
            id: 9,
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
         },
         {
            id: 10,
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
         },
         {
            id: 11,
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
         },
         {
            id: 12,
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
         },
         {
            id: 13,
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
         },
         {
            id: 14,
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
         },
         {
            id: 15,
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
         }
    ]

    return (
       <div className={styles.message_container}>
           <div className={styles.user_container}>
               <span className={styles.user_title}>联系人列表</span>
               <ul className={styles.user_list}>
                  {
                    messageList.length && messageList.map((item,index) => {
                        return (
                            <li className={styles.user_item} key={item.id}>
                            <Avatar size={64} src={item.src}/>
                            <div className={styles.user_message}>
                                
                            </div>
                           </li>
                        )
                    })
                  }
               </ul>
           </div>
           <div className={styles.chat_box}>
              <ChatBox/>
           </div>
       </div>
    )
}

export default Message;