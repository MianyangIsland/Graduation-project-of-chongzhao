import React from "react";
import { Button, Input } from 'antd';
import styles from './index.module.css';

const { TextArea } = Input; 

const ChatBox = () => {
    return (
       <div className={styles.chat_container}>
          <div className={styles.message_container}>

          </div>
          <div className={styles.send_message_container}>
              <TextArea 
               rows={4}
               style={{
                width: '80%', 
                height: '100%',
                resize: 'none',
                border: 'none',
                outline: 'none'
               }}
               />
               <Button 
                style={{
                    marginRight: 80
                }}
               >发送</Button>
          </div>
       </div>
    )
}

export default ChatBox;