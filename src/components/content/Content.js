import React from 'react';
import ContentMain from './ContentMain';
import ContentRight from './ContentRight';
import ContentTop from './ContentTop';

const Content = () => {
    return (
        <div className='p-1'>
            <div>
                <ContentTop></ContentTop>
            </div>
            
            <div className='grid grid-cols-6'>
                <div className='col-span-4 px-2'>
                    <ContentMain></ContentMain>
                </div>
                <div className='col-span-2'>
                    <ContentRight></ContentRight>
                </div>
            </div>
        </div>
    );
};

export default Content;