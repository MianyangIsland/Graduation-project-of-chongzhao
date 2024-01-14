import React from "react";
import { Avatar } from 'antd';
import styles from './index.module.css';

const MessageItem = (props) => {
    const uuid = 123
    const messageData = props.data;
    return (
        <li className={styles.message_item_container}>
           {
            messageData.fromId === uuid ? (
                <div 
            style={{
                float: messageData.fromId === uuid ? 'left' : 'right',
                paddingLeft: messageData.fromId === uuid ? '5px' : '0',
                paddingRight: messageData.fromId === uuid ? '0' : '5px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            }}
           >
            <Avatar 
            size={54}
            src={messageData.url}
            />
            <span className={styles.message_body}>{messageData.messageBody}</span>
           </div>
            ) :(
                <div 
                    style={{
                        float: messageData.fromId === uuid ? 'left' : 'right',
                        paddingLeft: messageData.fromId === uuid ? '5px' : '0',
                        paddingRight: messageData.fromId === uuid ? '0' : '5px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start'
                    }}
           >
            <span className={styles.message_body}>{messageData.messageBody}</span>
            <Avatar 
            size={54}
            src={messageData.url}
            />
           </div>
            )
           }
        </li>
    )
}
export default MessageItem;