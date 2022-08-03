import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login/Login';

const Home = () => {
    return (
        <div>
            <h1>Trang chu</h1>
            <img src='https://thienthoi.com.vn/wp-content/uploads/2020/07/20-cong-cu-thiet-ke-giao-dien-nguoi-dung-tot-nhat.jpg'/>
            <Link to='/' element={<Login/>}>
                <button className='button-login'>Dang xuat</button>
            </Link>
        </div>
    );
};

export default Home;