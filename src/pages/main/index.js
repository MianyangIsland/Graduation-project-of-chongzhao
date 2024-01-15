import React , { Suspense} from "react";
import { Route , Routes} from "react-router-dom";
import Nav from '../../components/navigation'
import styles from  './index.module.css'
const Person = React.lazy(() => import('../person'));
const Recommend = React.lazy(() => import('../recommend'));
const Message = React.lazy(() => import('../message'));
const Community = React.lazy(() => import('../community'));
const ProductDetails = React.lazy(() => import('../productDetails'));
// 主页面
const main = () => {
  return (
    <div className={styles.main_container}>
       <div className={styles.main_view}>
            
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="person" element={<Person/>}></Route>
                <Route path="recommend" element={<Recommend/>}></Route>
                <Route path="message" element={<Message/>}></Route>
                <Route path="community" element={<Community/>}></Route>
                <Route path="product_details" element={<ProductDetails/>}></Route>
            </Routes>
      </Suspense>
      </div>
      <div className={styles.bottom_navigation_bar}>
         <Nav />
      </div>
    </div>
  )
}


export default main;