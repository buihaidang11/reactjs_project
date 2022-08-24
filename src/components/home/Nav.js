import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    const navHome = [
        {
            id: 1,
            icon: "fa-solid fa-house-chimney",
            color_icon: 'text-[#007BFF]',
            content: 'Trang chủ'
        },
        {
            id: 2,
            icon: "fa-solid fa-flag-checkered",
            color_icon: 'text-[#f33e20]',
            content: 'Thông báo từ JVB'
        },
        {
            id: 3,
            icon: "fa-solid fa-face-smile",
            color_icon: 'text-[#F783AC]',
            content: 'Tin tức, sự kiện'
        },
        {
            id: 4,
            icon: "fa-solid fa-calendar-days",
            color_icon: 'text-[#BE4BDB]',
            content: 'Đặt phòng họp'
        },
        {
            id: 5,
            icon: "fa-solid fa-magnifying-glass-dollar",
            color_icon: 'text-[#007BFF]',
            content: 'Danh sách dự án'
        },
        {
            id: 6,
            icon: "fa-solid fa-address-book",
            color_icon: 'text-[#BE4BDB]',
            content: 'Danh sách nhân viên'
        },
        {
            id: 7,
            icon: "fa-solid fa-skull-crossbones",
            color_icon: 'text-[#F783AC]',
            content: 'Nội quy/Quy định'
        },
        {
            id: 8,
            icon: "fa-solid fa-pen-to-square",
            color_icon: 'text-[#82C91E]',
            content: 'Kinh nghiệm làm việc'
        },
        {
            id: 9,
            icon: "fa-solid fa-share-from-square",
            color_icon: 'text-[#FD7E14]',
            content: 'Chia sẻ tài liệu'
        },
        {
            id: 10,
            icon: "fa-solid fa-laptop-code ",
            color_icon: 'text-[#BE4BDB]',
            content: 'Quản lý thiết bị'
        },
    ]

    return (
        <div>
            <div>
                <Link to='/Home'>
                    <img className='px-[32px] py-[16px] mt-4 ' src='http://jvb-corp.com/img/logo.png'/>
                </Link>
                <p className='uppercase text-center mb-4 text-[#4285f4]'>Thực tập sinh</p>
                        {navHome.length > 0 && navHome.map((item) => {
                            return <div className='flex border-b-2 cursor-pointer nav_home pl-5 py-3'>
                            <i className={`${item.icon} ${item.color_icon} text-[#007BFF] flex items-center`}></i>
                            <div className='pl-5'>{item.content}</div>
                            </div>
                        })}
            </div>
        </div>
    );
};

export default Nav;