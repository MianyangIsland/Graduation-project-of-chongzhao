import React from "react";
import { Button, Input } from 'antd';
import MessageItem from "./MessageItem";
import styles from './index.module.css';

const { TextArea } = Input; 
const MockData = [
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:1,
        messageBody:'在浮动布局中，父元素的高度默认被子元素撑开，当子元素浮动后，其会完全脱离文档流，子元素从文档流中脱离将会无法撑起父元素的高度，导致父元素的高度丢失。'
    },
    {
        fromId: 456,
        toId: 123,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:2,
        messageBody:'一九七五年二三月间，一个平平常常的日子，细的雨丝夹着一星半点的雪花，正纷纷淋淋地向大地飘洒着。时令己快到凉蛰，雪当然再不会存留，往往还没等落地，就已经消失得无踪无影了。黄土高原严寒而漫长的冬天看来不要过去，但那真正温暖的春天还远远地没有到来。'
    },
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:3,
        messageBody:'贼你妈'
    },
    {
        fromId: 456,
        toId: 123,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:4,
        messageBody:'贼你妈'
    },
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:5,
        messageBody:'贼你妈'
    },
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:6,
        messageBody:'贼你妈'
    },
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:7,
        messageBody:'贼你妈'
    },
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:8,
        messageBody:'贼你妈'
    },
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:9,
        messageBody:'贼你妈'
    },
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:10,
        messageBody:'贼你妈'
    },
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:11,
        messageBody:'贼你妈'
    },
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:12,
        messageBody:'贼你妈'
    },
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:13,
        messageBody:'贼你妈'
    },
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:14,
        messageBody:'贼你妈'
    },
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:15,
        messageBody:'贼你妈'
    },
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:16,
        messageBody:'贼你妈'
    },
    {
        fromId: 123,
        toId: 456,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        messageId:17,
        messageBody:'贼你妈'
    }
]

const ChatBox = () => {
    return (
       <div className={styles.chat_container}>
          <div className={styles.message_container}>
            <ul className={styles.message_list}>
                {
                    MockData.map((item,index) => {
                        return <MessageItem data={item} key={item.messageId}/>
                    })
                }
            </ul> 
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