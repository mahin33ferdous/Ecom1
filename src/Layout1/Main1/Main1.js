import React from 'react';
import Header from '../../component/Header/Header'

import Shop from '../../component/Shop/Shop'
import { Outlet } from 'react-router-dom';
const Main1 = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main1;