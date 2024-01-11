import {Routes, Route} from "react-router-dom";
import Login from './pages/login';
import Registered from "./pages/registered";
import Main from "./pages/main";
import styles from  './App.module.css';

function App() {
  return (
    <div className={styles.App}>
       <Routes>
         <Route path="" element={ <Login/>}></Route>
         <Route path="/login" element={ <Login/>}></Route>
         <Route path="/register" element={<Registered/>}></Route>
         <Route path="/main/*" element={<Main/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
