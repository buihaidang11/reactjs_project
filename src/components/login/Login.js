import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const [user, setUser] = useState([]);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const array = user.filter((item) => {
      if (
        item.username === account.username &&
        item.password === account.password
      ) {
        return item;
      }
      return "";
    });
    array.length
      ? navigate("Home")
      : setMessage("!Thong tin dang nhap khong chinh xac");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_DB}/${process.env.REACT_APP_ACCOUNT}`
    );
    setUser(result.data);
  };

  return (
    <div className="flex flex-col bg-[#fff] shadow-xl w-full max-w-[560px] mt-[180px]">
      <div className="px-[20px] py-[24px] flex justify-center bg-[#33b5e5] text-white text-xl">
        BBS System
      </div>
      <div className="pt-[24px] pb-[20px] px-[48px]">
        <form>
          <label className="label_login text-xm text-[#757575]">E-mail</label>
          <input
            className="input_login p-1 w-full text-xm leading-4 border-b border-grey-800 h-8 mb-2 outline-none"
            name="username"
            value={account.username}
            onChange={(e) => {
              setAccount({ ...account, username: e.target.value });
              setMessage("");
            }}
            type="text"
          />
          <label className="label_login text-xm text-[#757575]">Mật khẩu</label>
          <input
            className="input_login p-1 w-full text-xm leading-4 border-b border-grey-800 h-8 outline-none"
            name="password"
            value={account.password}
            onChange={(e) => {
              setAccount({ ...account, password: e.target.value });
              setMessage("");
            }}
            type="password"
          />
          <div className="flex p-[20px] justify-around">
            <div>
              <label className="flex items-center">
                <input
                  className="mr-[10px] w-[18px] h-[18px]"
                  type="checkbox"
                />
                <span>Nhớ đăng nhập</span>
              </label>
            </div>
            <div>
              <a className="text-[#007bff]" href="/">
                Quên mật khẩu?
              </a>
            </div>
          </div>

          <div
            className="bg-[#33b5e5] w-full py-[12px] px-[20px] text-white mb-[20px] cursor-pointer text-center"
            onClick={handleLogin}
          >
            Đăng nhập
          </div>
          {message && <div className="text-[red]">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
