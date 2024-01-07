import React from "react";
import ProductInfoList from "./infolist";
import './index.css';

const ProductionInfo = (props) => {
   return (
     <div className="production-info-container">
        <div className="info-title">{props.title}</div>
        <div className="info-list-container">
            <ProductInfoList getUrl="http://wwww.baidu.com"/>
        </div>
     </div>
   )
}

export default ProductionInfo;