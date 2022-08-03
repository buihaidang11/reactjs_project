import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/login/Login';

function App() {
  return (
    <div className='form-login'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
