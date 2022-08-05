import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Login from './components/login/Login';

function App() {
  return (
    <div className='flex w-full justify-center items-center'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
