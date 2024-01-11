import React from "react";
import { Image } from 'antd';
import styles from  './index.module.css';

const ProductionInfoItem = () => {
    return (
       <li className={styles.info_item}>
           <Image 
             width={180}
             src="https://img14.360buyimg.com/n7/jfs/t1/246709/39/1284/38729/658e904eF44381f0d/5a4d422cd0fb2210.jpg"
            />
            <span style={{display: 'inline'}}>
            小米14 徕卡光学镜头 光影猎人900 徕卡75mm浮动长焦 骁龙8Gen3 16+512 黑色
            </span>
       </li>
    )
}

export default ProductionInfoItem;