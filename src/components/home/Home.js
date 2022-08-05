import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../login/Login';
import Nav from './Nav';

const Home = () => {
    return (
        <div className='grid grid-cols-6'>
            <div className='col-span-1 px-[24px] pb-[24px] '>
                <Nav></Nav>
            </div>
            
            <div className='col-span-5'>
                
                <div className='flex mb-3 justify-around'>
                    <h1 className='px-6'>Trang chu</h1>
                    <Link to='/' element={<Login/>}>
                        <button className='w-[120px] text-center py-4 bg-[#33b5e5]'>Dang xuat</button>
                    </Link>
                </div>
                <img src='https://thienthoi.com.vn/wp-content/uploads/2020/07/20-cong-cu-thiet-ke-giao-dien-nguoi-dung-tot-nhat.jpg'/>
            </div>
        </div>
    );
};

export default Home;