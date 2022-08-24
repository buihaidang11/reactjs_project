import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../login/Login";

const NavBar = () => {

  const [userHeader, setUserHeader] = useState(true);

  const handleUserHeader = () => {
    setUserHeader( prevState => !prevState)
  };

  return (
    <div className="grid grid-cols-5 py-2 pb-3 bg-[#97bfe4] flex justify-between shadow-md w-full fixed">
      <div className="col-span-3 py-2 px-4 flex items-center">
        <a href="/Home" className="px-4 py-2 text-white">
          Giờ làm việc
        </a>
        <a href="/Home" className="px-4 py-2 text-white">
          Xin phép
        </a>
        <a href="/Home" className="px-4 py-2 text-white">
          Ngày phép
        </a>
        <a href="/Home" className="px-4 py-2 text-white">
          Quỹ JVB
        </a>
        <a href="/Home" className="px-4 py-2 text-white">
          Báo cáo công việc
        </a>
      </div>

      <div className="flex col-span-2 pr-4 pl-12">
        <div className="flex items-center">
          <img
            className="h-10 w-10"
            src="https://bbs.hatoq.com/dist/img/no-avatar.png"
          />
        </div>
        <div
          className="flex items-center text-white cursor-pointer relative"
          onClick={handleUserHeader}
        >
          <a className="pl-4 py-3">Bùi Hải Đăng</a>
          <i className="fa-solid fa-caret-down px-1"></i>
          <div className={userHeader ? 'hidden' : 
          "block absolute top-12 text-[#65717e] px-2 min-w-[9.5rem] border border-2 bg-white rounded-sm text-sm font-thin"}>
            <div className="block py-3 px-2 hover:bg-[#007bff] hover:text-white">Thiết lập cá nhân</div>
            <div className=" py-3 px-2 hover:bg-[#007bff] hover:text-white">Đổi mật khẩu</div>
            <Link to="/" element={<Login />}>
              <div className="text-centerpy-2 my-3 py-2 px-2 border-t-2 hover:bg-[#007bff] hover:text-white">
                Đăng xuất
              </div>
            </Link>
          </div>
        </div>
        <i className="fa-solid fa-bell flex items-center text-white px-6 py-3 text-xl"></i>
      </div>
    </div>
  );
};

export default NavBar;
