import './App.css';
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route/PrivateRoute';

function App() {  

  const [authenticate, setAuthenticate] = useState(false); //로그인 여부

  return (
    <>
      <Navbar authenticate={authenticate}/>
      <Routes> 
        <Route path='/' element={<ProductAll/>}/>  
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/> 
        {/* <Route path='/product/:id' element={<ProductDetail/>}/>  */}
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/> 
      </Routes>
    </>
  );
}

export default App;
