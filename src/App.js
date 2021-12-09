import React from "react";
import HomeScreen from "./components/homeScreen/HomeScreen";
import { Routes, Route} from "react-router-dom";

import WatchScreen from "./components/watchScreen/WatchScreen";
import SearchScreen from "./components/searchScreen/SearchScreen";

import { Layout } from "./Layout";
import Login from "./components/login/Login";

import "./_base.scss"
import "./_app.scss"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={
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
        <Route path="/login" element ={<Login/>}/>
        
      </Routes>
    </div>
    
  );
}

export default App;
