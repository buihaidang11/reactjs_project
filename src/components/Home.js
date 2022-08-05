import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login/Login';

const Home = () => {
    return (
        <div>
            <div className='flex mb-3 justify-around'>
                <h1 className='px-6'>Trang chu</h1>
                <Link to='/' element={<Login/>}>
                    <button className='w-[120px] text-center py-4 bg-[#33b5e5]'>Dang xuat</button>
                </Link>
            </div>
            <img src='https://thienthoi.com.vn/wp-content/uploads/2020/07/20-cong-cu-thiet-ke-giao-dien-nguoi-dung-tot-nhat.jpg'/>
        </div>
    );
};

export default Home;