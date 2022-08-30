import axios from "axios";
import React, { useEffect, useState } from "react";

const ContentMain = () => {
  const [contentMain, setContentMain] = useState([]);

  useEffect(() => {
    console.log(process.env);
    getContentMain()
      .then((content) => {
        setContentMain(content);
      })
      .catch(() => {
        console.log("Loi");
      });
  }, []);

  const getContentMain = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_DB}/${process.env.REACT_APP_CONTENTMAIN}`
    );
    return response.data;
  };

  return (
    <div>
      <div>
        {contentMain.length > 0 &&
          contentMain.map((item, i) => (
            <div className="grid grid-cols-12" key={i++}>
              <div className="col-span-5 py-2">
                <img className="rounded-sm" src={item.img} alt="" />
              </div>
              <div className="col-span-7 py-2 pl-8">
                <h2 className="text-[18px] font-semibold">{item.title}</h2>
                <div className="flex font-light text-[15px] text-[#212529] me-2">
                  <p className="pr-1">Thời gian tổ chức:</p>
                  <p className="text-[#FF3537]">{item.time}</p>
                </div>
                <div className="flex font-light text-[15px] text-[#212529]">
                  <p className="pr-1">Địa điểm tổ chức:</p>
                  <p className="text-[#FF3537]">{item.location}</p>
                </div>
                <hr />
                <div className="font-light text-[15px] text-[#212529]">
                  {item.para}
                </div>
                <button className="bg-[#fb3] text-white px-6 py-3 my-2 text-sm rounded-sm">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
      </div>
      <div>
        <button className="bg-[#4285f4] uppercase text-white px-8 py-3 rounded-sm my-6">
          Xem tất cả sự kiện
        </button>
      </div>
      <div className="px-5 py-4 border-solid border-2 border-grey ">
        <h4 className="uppercase font-normal text-2xl">Góp ý công ty</h4>
        <form>
          <textarea
            className="border-none w-full h-[127px] resize-none outline-none"
            id="textarea"
            placeholder="Rất mong nhận được ý kiến đóng góp hoặc đề xuất của bạn đến công ty!"
          />
          <button className="bg-[#4285f4] text-white px-4 py-2 right-0">
            Gửi ngay
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContentMain;
