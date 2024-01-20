import React , { useEffect, useState } from "react";
import { Drawer } from 'antd';
import styles from './index.module.css';

const Comments = (props) => {
    console.log(props.open)
    const [open , setOpen ] = useState(false);
    useEffect(() => {
       setOpen(props.open);
    },[props])
    const onClose = () => {
        props.changeOpen();
      };
    return (
        <Drawer title="商品评价" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
       </Drawer>
    )
}

export default Comments;