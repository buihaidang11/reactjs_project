import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

const ContentMain = () => {

    const [contentMain, setContentMain] = useState([])

    useEffect(() => {
        getContentMain().then((content) => {
            setContentMain(content)
        })
    })

    const getContentMain = async () => {
        const response  = await axios.get("http://localhost:8000/contents_main")
        return response.data
    }

    return (
        <div>
            <div>
                {contentMain.length >0 && contentMain.map((item) => {
                    return <div className='grid grid-cols-12'>
                        <div className='col-span-5 py-2'><img className='rounded-sm' src={item.img}/></div>
                        <div className='col-span-7 py-2 pl-8'>
                            <h2 className='text-[18px] font-semibold'>{item.title}</h2>
                            <p className='flex font-light text-[15px] text-[#212529] me-2'>Thời gian tổ chức: <p className='text-[#FF3537]'>{item.time}</p></p>
                            <p className='flex font-light text-[15px] text-[#212529]'>Địa điểm tổ chức: <p className='text-[#FF3537]'>{item.location}</p></p>
                            <hr></hr>
                            <p className='font-light text-[15px] text-[#212529]'>{item.para}</p>
                            <button className='bg-[#fb3] text-white px-6 py-3 my-2 text-sm rounded-sm'>Xem chi tiết</button>
                        </div>
                    </div>
                })}
            </div>
            <div>
                <button className='bg-[#4285f4] uppercase text-white px-8 py-3 rounded-sm my-6'>Xem tất cả sự kiện</button>
            </div>
            <div className='px-5 py-4 border-solid border-2 border-grey '>
            <h4 className='uppercase font-normal text-2xl'>Góp ý công ty</h4>
                <form>
                    <textarea className='border-none w-full h-[127px] resize-none outline-none' id='textarea'
                    placeholder='Rất mong nhận được ý kiến đóng góp hoặc đề xuất của bạn đến công ty!'
                    >
                        
                    </textarea>
                    <button className='bg-[#4285f4] text-white px-4 py-2 right-0'>Gửi ngay</button>
                </form>
            </div>
        </div>
    );
};

export default ContentMain;