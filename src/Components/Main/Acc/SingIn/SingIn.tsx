import { useState } from 'react';
import './sing-in.scss';

const SingIn =(props: { setReg: any; setSingIn: any; users: any; setAccountExit: any; }) => {

    const { setReg, setSingIn, users } = props;

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const auditAcc = () => {
        users.some((elem: { login: string; password: string; }) => {
            if(login === elem.login && password === elem.password){
                props.setAccountExit(localStorage.setItem('Network', JSON.stringify('welcome')));
            }
            else{
                // alert('Невірний логін або пароль');
            }
        })
    };

    const clickReg = () => {
        setSingIn(false);
        setReg(true);
    };

    return(
        <div className='sing-in'>
            <div className="sing-in-warning">
                <div className="sing-in-warning_image">
                    <div className="be">
                        <img src="https://img.icons8.com/external-others-inmotus-design/256/external-Info-virtual-keyboard-others-inmotus-design-4.png" alt="" />
                    </div>
                </div>
                <div className="sing-in-warning_text">
                    <p>Ввійдіть, щоб продовжити.</p>
                </div>
            </div>
            <div className="sing-in-account">
                <h4>Ввійти в Social Network</h4>
                <input type="text" onChange={(e)=>{setLogin(e.target.value)}} placeholder='Введіть логін'/>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Введіть пароль'/>
                <div className="sing-in-account-error"></div>
                <div className="sing-in-account-btn">
                    <button className='singIn' onClick={auditAcc}>Вхід</button>
                </div>
                <button className='reg' onClick={clickReg}>Створити новий аккаунт</button>
            </div>
        </div>
    )
};

export default SingIn;