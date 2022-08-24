import React from 'react';
import Content from '../content/Content';
import Nav from './Nav';
import NavBar from './NavBar';

const Home = () => {
    return (
        <div>
            <div className='px-3 pb-[24px] max-h-[100vh] overflow-auto shadow-2xl fixed w-[270px] bg-white z-50'>
                <Nav></Nav>
            </div>
            
            <div className='pl-[270px]'>
                <NavBar></NavBar>
                <Content></Content>
            </div>
        </div>
    );
};

export default Home;