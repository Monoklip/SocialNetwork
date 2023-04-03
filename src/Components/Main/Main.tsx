import { useState } from 'react';
import './main.scss';
import Acc from './Acc/Acc';
import Home from './Home/Home';
import{ Route, Routes } from 'react-router-dom';

const Main = () => {
    const [accountExit, setAccountExit] = useState(JSON.parse(localStorage.getItem('Network') as string) || []);
    const [registration, setRegistretion] = useState(true);

    console.log(accountExit == '' );
    
    return(
        <div className="main">
            <Routes>
                {accountExit != '' && 
                    <Route path='/' element={<Home/>}></Route>
                }
                {accountExit == '' && 
                    <Route path='/' element={<Acc setAccountExit={setAccountExit}/>}></Route>
                }
            </Routes>

        </div>
    )
};

export default Main;