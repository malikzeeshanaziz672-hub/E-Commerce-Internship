import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Msg from '../Pages/Msg.jsx';

const Profile = lazy(()=> import("../Pages/Profile.jsx"));
const Message = lazy(() => import("../Pages/Msg.jsx"));
const Orders = lazy(()=>import("../Pages/Orders.jsx"));
const MyCart = lazy(()=>import("../Pages/MyCart.jsx"));
const Home = lazy(()=>import("../Pages/Home.jsx"))

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/msg' element={<Msg/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/mycart' element={<MyCart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router