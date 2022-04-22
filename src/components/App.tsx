import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import '../App.css';
import Home from "./Home";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Header from "./Header";

export default function App () {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Header
          appName="vite react-ts"
          currentUser=""/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}