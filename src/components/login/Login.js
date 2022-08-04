import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Home from '../Home';

const Login = () => {

    const handleLogin = () => {

    }

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () =>  {
        const result = await axios.get('http://localhost:8000/accounts')
        console.log(result.data);
    }
    
    return (
        <div className='cart'>
            <div className='title-cart'>BBS System</div>
            <div className='cart-body'>
                <form>       
                    <p className='title-input'>E-mail</p>
                    <input className='input-form' name='username' type='text'/>
                    <p className='title-input'>Mật khẩu</p>
                    <input className='input-form' name='password' type='password'/>
                    <div className='nav-form'>
                        <div>
                            <label>
                                <input className='checkbox-login' type='checkbox'/>
                                <span>Nhớ đăng nhập</span>
                            </label>
                        </div>
                        <div>
                            <a href='/'>Quên mật khẩu?</a>
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