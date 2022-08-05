import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    const navHome = [
        {
            id: 1,
            icon: 'http://jvb-corp.com/img/logo.png',
            content: 'Trang chủ'
        },
        {
            id: 2,
            icon: 'http://jvb-corp.com/img/logo.png',
            content: 'Thông báo từ JVB'
        },
        {
            id: 3,
            icon: 'http://jvb-corp.com/img/logo.png',
            content: 'Tin tức, sự kiện'
        },
        {
            id: 4,
            icon: 'http://jvb-corp.com/img/logo.png',
            content: 'Đặt phòng họp'
        },
        {
            id: 5,
            icon: 'http://jvb-corp.com/img/logo.png',
            content: 'Danh sách dự án'
        },
        {
            id: 6,
            icon: 'http://jvb-corp.com/img/logo.png',
            content: 'Danh sách nhân viên'
        },
        {
            id: 7,
            icon: 'http://jvb-corp.com/img/logo.png',
            content: 'Nội quy/Quy định'
        },
        {
            id: 8,
            icon: 'http://jvb-corp.com/img/logo.png',
            content: 'Kinh nghiệm làm việc'
        },
        {
            id: 9,
            icon: 'http://jvb-corp.com/img/logo.png',
            content: 'Chia sẻ tài liệu'
        },
        {
            id: 10,
            icon: 'http://jvb-corp.com/img/logo.png',
            content: 'Quản lý thiết bị'
        },
    ]

    return (
        <div>
            <Link to='/Home'>
                <img className='px-[32px] py-[16px] mt-4' src='http://jvb-corp.com/img/logo.png'/>
            </Link>
            <p className='uppercase text-center mb-4'>Thuc tap sinh</p>
            <ul>
                <li>
                    {navHome.length > 0 && navHome.map((item, index) => {
                        return <div>
                            <i></i>
                            <div className='px-5 py-3'>{item.content}</div>
                        </div>
                    })}
                </li>
            </ul>
        </div>
    );
};

export default Nav;