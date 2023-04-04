import { useEffect, useState } from 'react';
import './main.scss';
import Acc from './Acc/Acc';
import Home from './Home/Home';
import{ Route, Routes } from 'react-router-dom';
import Messages from './Messages/Messages';

const Main = () => {
    const [accountExit, setAccountExit] = useState(JSON.parse(localStorage.getItem('SocialNetwork') as string) || []);
    
    const [users, setUsers] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/user');

    const getUsers = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const auditAcc = () => {
        const person = users.filter((elem: { email: string; password: string; name: string; surname: string; day: string; mouth: string; year: string; sex: string; image: string; }) => {
            if(email === elem.email && password === elem.password){
                setAccountExit(localStorage.setItem('SocialNetwork', JSON.stringify('Welcome')));
                localStorage.setItem('User', JSON.stringify(elem))
            }
            else{
                // console.log(2);
            }
        });
    };

    useEffect(()=>{
        getUsers();
    },[]);

    return(
        <div className="main">
            <Routes>
                {accountExit != '' && 
                    <Route path='/' element={<Home setAccountExit={setAccountExit}/>}></Route>
                }
                {accountExit == '' && 
                    <Route path='/' element={
                        <Acc 
                            setAccountExit={setAccountExit}
                            users={users}
                            getUsers={getUsers} 
                            setEmail={setEmail}
                            setPassword={setPassword}
                            auditAcc={auditAcc}
                        />}>
                    </Route>
                }
                <Route path='/message' element={<Messages/>}></Route>
            </Routes>
        </div>
    )
};

export default Main;