import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/hidebar/Sidebar";


export const Layout = ({children})=>{
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