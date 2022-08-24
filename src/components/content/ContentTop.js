import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ContentTop = () => {

    const [contentTop, setContentTop] = useState([])

    useEffect(() => {
        getContentTop().then((content) => {
            setContentTop(content)
        })
    }, [])

    const getContentTop = async () => {
        const response = await axios.get("http://localhost:8000/contents_top")
        return response.data
    }

    return (
        <div >
            <div className='grid grid-cols-2 max-w-full px-[-12px] pt-[4.5rem]'>
                {contentTop.length > 0 && contentTop.map((item) => {
                            return <div className='col-span-1 flex mt-3 bg-[#f5f5f5] mx-3'>
                                <div className='flex items-center'><img className='max-h-44 pr-5' src={item.img}/></div>
                                <div className='leading-7'>
                                    <h2 className='text-[22px] font-bold py-5 uppercase'>{item.title}</h2>
                                    <p className='font-light text-[#6d7179]'>{item.content}</p>
                                </div>
                            </div>
                                            })}
            </div>
            <div><a className='flex justify-end pr-3 py-2'>Xem thêm thông báo</a></div>
        </div>
    );
};

export default ContentTop;