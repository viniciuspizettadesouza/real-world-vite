import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "../index.css";
import '../App.css'
import Home from "./Home";
import { Provider } from "react-redux";
import store from '../store/store'

export class App extends React.Component {
    render () {
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    <div className="pt-20">
                        <Routes>
                            <Route path="/" element={ <Home/> }/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default (App);
