import React from "react";
import ProductInfoList from "./infolist";
import styles from  './index.module.css';

const ProductionInfo = (props) => {
   return (
     <div className={styles.production_info_container}>
        <div className={styles.info_title}>{props.title}</div>
        <div className={styles.info_list_container}>
            <ProductInfoList getUrl="http://wwww.baidu.com"/>
        </div>
     </div>
   )
}

export default ProductionInfo;