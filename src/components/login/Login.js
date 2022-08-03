import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home';

const Login = () => {
    return (
        <div className='cart'>
            <div className='title-cart'>BBS System</div>
            <div className='cart-body'>
                <form>       
                    <p className='title-input'>E-mail</p>
                    <input className='input-form'/>
                    <p className='title-input'>Mật khẩu</p>
                    <input className='input-form'/>
                    <div className='nav-form'>
                        <div>
                            <label>
                                <input className='checkbox-login' type='checkbox'/>
                                <span>Nhớ đăng nhập</span>
                            </label>
                        </div>
                        <div>
                            <a>Quên mật khẩu?</a>
                        </div>
                    </div>
                    
                    <Link  to='/home' element={<Home/>}>
                        <button className='button-login'>Đăng nhập</button>
                    </Link>
                    
                </form>

            </div>

        </div>
    );
};

export default Login;