import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import urlPath from "../../lib/constant";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Chua nhap tai khoan"),
      password: Yup.string().required("Chua nhap mat khau"),
    }),
    onSubmit: (values) => handleLogin(values),
  });
  const navLogin = useNavigate();

  const [user, setUser] = useState([]);
  const [message, setMessage] = useState("");
  const handleLogin = (account) => {
    console.log(account);
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
      `${process.env.REACT_APP_DB}${urlPath.login}`
    );
    setUser(result.data);
  };

  return (
    <div className="flex flex-col bg-[#fff] shadow-xl w-full max-w-[560px] mt-[180px]">
      <div className="px-[20px] py-[24px] flex justify-center bg-[#33b5e5] text-white text-xl">
        BBS System
      </div>
      <div className="pt-[24px] pb-[20px] px-[48px]">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-input relative">
            <input
              type="text"
              className="input-login p-1 w-full text-xm leading-4 border-b border-grey-800 h-8 mb-2 outline-none"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              placeholder=" "
            />
            <label className="label-login text-[#757575] absolute left-0 top-1/2">
              E-mail
            </label>
          </div>

          {formik.touched.username && formik.errors.username ? (
            <div className="text-sm text-red-500">{formik.errors.username}</div>
          ) : null}
          <div className="form-input relative">
            <input
              type="password"
              className="input-login p-1 w-full text-xm leading-4 border-b border-grey-800 h-8 outline-none"
              name="password"
              placeholder=" "
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <label className="label-login text-[#757575] absolute top-1/2 left-0">
              Mật khẩu
            </label>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-sm text-red-500">{formik.errors.password}</div>
          ) : null}
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

          <button
            className="bg-[#33b5e5] w-full py-[12px] px-[20px] text-white mb-[20px] cursor-pointer text-center"
            type="submit"
          >
            Đăng nhập
          </button>
          {message && <div className="text-[red]">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
