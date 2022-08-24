import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ContentRight = () => {
    
    const [projectNew, setProjectNew] = useState([])


    useEffect(() => {
        getProjectNew()
        .then((content) => {
            setProjectNew(content)
        })
    })

    const getProjectNew = async () => {
        const response = await axios.get("http://localhost:8000/project")
        return response.data
    }

    const dtNow = new Date()
    return (
        <div className='pl-4 pr-2'>
            <div className='px-5 py-6 bg-[#E3F2FD] rounded-md border-grey border-2'>
                <div className=' flex justify-center bg-white'>
                    <img src='https://bbs.hatoq.com/img/pigs/pig-1.png'/>
                </div>
                <div>
                    <h4 className='flex text-2xl font-normal uppercase px-4 py-5 text-[#4285f4] text-center'>Tiền phạt cả công ty tháng {dtNow.getMonth()+1}</h4>
                    <div className='flex text-[#4285f4] text-5xl font-bold justify-center'>1.360.000</div>
                </div>
            </div>
            <div>
                <div className='flex w-full mt-4 py-3 justify-center text-white bg-[#4285f4] uppercase'>Dự án mới</div>
                <div>
                    <ul className='border-grey border-2 border-b-0'>
                        {projectNew.length > 0 && projectNew.reverse().map((item) => {
                            return <div> <li className='px-5 py-3'>
                                <strong>{item.name}</strong>
                                <h5>{item.use.map((result) => {
                                    return <h5 className='text-[16px] text-grey'>{result}</h5>
                                })}</h5>
                                </li>
                                <hr/>
                                </div>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContentRight;