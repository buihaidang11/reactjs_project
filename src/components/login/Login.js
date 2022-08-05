import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const array = data.filter((item) => {
      if (
        item.username === account.username &&
        item.password === account.password
      ) {
        return item;
      }
    });
    array.length
      ? navigate("Home")
      : setMessage("!Thong tin dang nhap khong chinh xac");
  };

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/accounts")
    setData(result.data)
  }

  return (
    <div className="flex flex-col bg-[#fff] border-solid border-2 border-gray-300 w-full max-w-[560px] mt-[180px]">
      <div className="px-[20px] py-[24px] flex justify-center bg-[#33b5e5] text-white text-xl">BBS System</div>
      <div className="pt-[24px] pb-[20px] px-[48px]">
        <form>
          <p className="text-xm text-[#757575] pt-3">E-mail</p>
          <input
            className="p-[4px] w-full text-xm leading-4 border-solid border-2 border-grey-800 focus:bg-[#ced4da]"
            name="username"
            value={account.username}
            onChange={(e) => {
              setAccount({ ...account, username: e.target.value });
              setMessage('');
            }}
            type="text"
          />
          <p className="text-xm text-[#757575] pt-3">Mật khẩu</p>
          <input
            className="p-[4px] w-full text-xm leading-4 border-solid border-2 border-grey-800 focus:bg-[#ced4da]"
            name="password"
            value={account.password}
            onChange={(e) =>
              {setAccount({ ...account, password: e.target.value })
              setMessage('')
              }
            }
            type="password"
          />
          <div className="flex p-[20px] justify-around">
            <div>
              <label>
                <input className="mr-[10px] w-[18px] h-[18px]" type="checkbox" />
                <span>Nhớ đăng nhập</span>
              </label>
            </div>
            <div>
              <a className="text-[#007bff]" href="/">Quên mật khẩu?</a>
            </div>
          </div>

          <div className="bg-[#33b5e5] w-full py-[12px] px-[20px] text-white mb-[20px] cursor-pointer text-center" onClick={handleLogin}>
            Đăng nhập
          </div>
          {message && <div className="text-[red]">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
