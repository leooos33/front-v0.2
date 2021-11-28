import React from 'react';
import './App.css';

import store from "./state/store"

import { useEagerConnect } from './hooks/useEagerConnect';
import { useInactiveListener } from './hooks/useInactiveListener';
import Header from './components/Header';
import Swap from './components/Swap';
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {

    const triedEager = useEagerConnect()
    useInactiveListener(!triedEager)

    return (
        <Background>
            <Header />
            <Swap />         
        </Background>
    );
}

export default App;

const Background = ({children}) => {
    return (
        <div className="absolute w-screen h-screen bg-black1">
        {children}
        </div>
    )
}