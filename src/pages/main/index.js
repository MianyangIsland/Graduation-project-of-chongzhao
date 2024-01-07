import React from "react";
import { Route , Routes} from "react-router-dom";
import Nav from '../../components/navigation'
import Person from "../person";
import './index.css'
// 主页面
const main = () => {
  return (
    <div className="main-container">
       <div className="main-view">
            <Routes>
                <Route path="person" element={<Person/>}></Route>
            </Routes>
      </div>
      <div className="bottom-navigation-bar">
         <Nav />
      </div>
    </div>
  )
}


export default main;