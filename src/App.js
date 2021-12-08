import React,{useEffect, useState} from "react";

import Header from "./components/header/Header";
import Sidebar from "./components/hidebar/Sidebar";
import HomeScreen from "./components/homeScreen/HomeScreen";
import {Container} from "react-bootstrap"
import { Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router'
import Login from "./components/login/Login";

import "./_app.scss"
import "./_base.scss"
import { useSelector } from "react-redux";
import WatchScreen from "./components/watchScreen/WatchScreen";
import SearchScreen from "./components/searchScreen/SearchScreen";


const Layout = ({children})=>{
  const [sideBar,toggleSideBar] = useState(false);

  const handelToggleSideBar = ()=>toggleSideBar(val=>!val);
  return (
    <>
      <Header handelToggleSideBar={()=>handelToggleSideBar()}/>
      <div className="app__container">
        <Sidebar sideBar={sideBar}/>
        <Container className="app__main ">
          {children}
        </Container>
      </div>
    </>
  )
}

function App() {

  const {accessToken,loading} = useSelector(state=>state.auth)

  const navigate = useNavigate()

  useEffect(()=>{

    if (!loading && !accessToken){
      navigate('/auth')
    }

  },[accessToken,loading,navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomeScreen/>
          </Layout>
        }/>
        <Route path="/search/:query" element={
          <Layout>
            <SearchScreen/>
          </Layout>
        }/>
        <Route path="/watch/:id" element={
          <Layout>
            <WatchScreen/>
          </Layout>
        }/>
        <Route path="/auth" element ={<Login/>}/>
     
      </Routes>
    </div>
    
  );
}

export default App;
