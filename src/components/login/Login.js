import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navLogin = useNavigate();
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const [user, setUser] = useState([]);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const checkAccount = user.filter((item) => {
      if (
        item.username === account.username &&
        item.password === account.password
      ) {
        return item;
      }
      return "";
    });
    checkAccount.length
      ? navLogin("Home")
      : setMessage("Thông tin đăng nhập không chính xác");
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
          <div className="form-input relative">
            <input
              className="input-login p-1 w-full text-xm leading-4 border-b border-grey-800 h-8 mb-2 outline-none"
              name="username"
              value={account.username}
              placeholder=" "
              onChange={(e) => {
                setAccount({ ...account, username: e.target.value });
                setMessage("");
              }}
              type="text"
            />
            <label className="label-login text-xm text-[#757575] absolute left-0 top-1/2">
              E-mail
            </label>
          </div>
          <div className="form-input relative">
            <input
              className="input-login p-1 w-full text-xm leading-4 border-b border-grey-800 h-8 outline-none"
              name="password"
              placeholder=" "
              value={account.password}
              onChange={(e) => {
                setAccount({ ...account, password: e.target.value });
                setMessage("");
              }}
              type="password"
            />
            <label className="label-login text-xm text-[#757575] absolute top-1/2 left-0">
              Mật khẩu
            </label>
          </div>
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
