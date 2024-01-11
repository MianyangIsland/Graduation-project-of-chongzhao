import React , {useState} from "react";
import ProductionInfoItem from "../infoitem";
import styles from  './index.module.css';

const ProductInfoList = (props) => {

  const [messageList , setMessageList ] = useState([
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
    {id:9},
    {id:10},
    {id:11},
    {id:12},
    {id:13},
    {id:14},
    {id:15},
    {id:16},
    {id:17},
    {id:18},
  ]);
 
  return (
       <ul className={styles.info_list}>
        {
             messageList.map((item,index) => {
              return <ProductionInfoItem key={item.id}/>
            }) 
        }
       <li className={styles.list_bottom}>暂无数据了哦~~~</li>
    </ul>
  )
}

export default ProductInfoList;