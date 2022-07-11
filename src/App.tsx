import React, { Children } from 'react';
import './App.css';

import { useEagerConnect } from './hooks/useEagerConnect';
import { useInactiveListener } from './hooks/useInactiveListener';
import { useWeb3React } from '@web3-react/core';

import Header from './components/Header';
import Table from './components/Table';
import Info from './components/Info';
import Body from './components/Body';
import DW from './components/DW';
function App() {

    const { active } = useWeb3React()
    const triedEager = useEagerConnect()
    useInactiveListener(!triedEager)

    return (
        <div className= "bg-black1 w-full h-full text-white font-sans font-bold">
            <Header />
            <Table />
            <Info />
            <Body />
        </div>

    );
}

export default App;
