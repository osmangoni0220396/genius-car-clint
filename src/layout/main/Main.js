import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/shared/footer/Footer';
import Header from '../../pages/shared/header/Header';

const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;