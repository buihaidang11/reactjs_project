import axios from "axios";
import React, { useEffect, useState } from "react";

const ContentTop = () => {
  const [contentTop, setContentTop] = useState([]);

  useEffect(() => {
    getContentTop()
      .then((content) => {
        setContentTop(content);
      })
      .catch(() => {
        console.log("Loi");
      });
  }, []);

  const getContentTop = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_DB}/${process.env.REACT_APP_CONTENTTOP}`
    );
    return response.data;
  };

  return (
    <div>
      <div className="grid grid-cols-2 max-w-full px-[-12px] pt-[4.5rem]">
        {contentTop.length > 0 &&
          contentTop.map((item, i) => (
            <div className="col-span-1 flex mt-3 bg-[#f5f5f5] mx-3" key={i++}>
              <div className="flex items-center">
                <img className="max-h-44 pr-5" src={item.img} alt="" />
              </div>
              <div className="leading-7">
                <h2 className="text-[22px] font-bold py-5 uppercase">
                  {item.title}
                </h2>
                <p className="font-light text-[#6d7179]">{item.content}</p>
              </div>
            </div>
          ))}
      </div>
      <div>
        <div className="flex justify-end pr-3 py-2 text-[blue] cursor-pointer">
          Xem thêm thông báo
        </div>
      </div>
    </div>
  );
};

export default ContentTop;
