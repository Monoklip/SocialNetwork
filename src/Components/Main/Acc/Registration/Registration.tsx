import { useState } from 'react';
import './registration.scss';

const Registration = (props: { setReg: any; setSingIn: any; users: any; getUsers: any; }) => {

    const { setReg, setSingIn, users } = props;

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [day, setDay] = useState<string>('1')
    const [mouth, setMouth] = useState<string>('Січень')
    const [year, setYear] = useState<string>('2023')
    const [sex, setSex] = useState<string>('');

    const [url, setUrl] = useState<string>('http://localhost:3000/user');

    const regAcc = () => {
        users.some(async (elem: { email: string; }) => {
            if(email != elem.email){
                const reposnse = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                        name: name,
                        surname: surname,
                        email: email,
                        password: password,
                        day: day,
                        mouth: mouth,
                        year: year,
                        sex: sex
                    }),
                    headers: { "Content-Type": "application/json" }
                }).finally(()=>{
                    closeRegBtn();
                    props.getUsers();
                })
            }
            else(
                alert('Такий аакаунт вже існує')
            )
        })
    };    

    const closeRegBtn = () => {
        setReg(false);
        setSingIn(true);
    };

    return(
        <div className='registration'>
            <div className="registration-closeBtn">
                <button onClick={closeRegBtn}>X</button>
            </div>
            <div className="registration-title">
                <h1>Створити аккаунт</h1>
                <p>швидко та легко</p>
            </div>
            <div className="registration-data">
                <input type="text" className='nameInp' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='І`мя'/>
                <input type="text" className='surnameInp' value={surname} onChange={(e)=>{setSurname(e.target.value)}} placeholder='Фамілія'/>
                <input type="text" className='emailInp' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Номер мобільного або E-mail'/>
                <input type="text" className='passwordInp' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Пароль'/>
            </div>
            <p>Дата народежння:</p>
            <div className="registration-date">
                <select value={day} onChange={(e)=>setDay(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <select value={mouth} onChange={(e)=>{setMouth(e.target.value)}}>
                    <option value="Січень">Січень</option>
                    <option value="Лютий">Лютий</option>
                    <option value="Березень">Березень</option>
                    <option value="Квітень">Квітень</option>
                    <option value="Травень">Травень</option>
                    <option value="Червень">Червень</option>
                    <option value="Липень">Липень</option>
                    <option value="Серпень">Серпень</option>
                    <option value="Вересень">Вересень</option>
                    <option value="Жовтень">Жовтень</option>
                    <option value="Листопад">Листопад</option>
                    <option value="Грудень">Грудень</option>
                </select>
                <select value={year} onChange={(e)=>{setYear(e.target.value)}}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            <p>Стать</p>
            <div className="registration-sex">
                <div className="registration-sex-people">
                    <span>Жінка</span>
                    <input required name='sex' type="radio" value={'Woman'} defaultChecked={false} onChange={(e)=>{setSex(e.currentTarget.value)}}/>
                </div>
                <div className="registration-sex-people">
                    <span>Чоловік</span>
                    <input required name='sex' type="radio" value={'Man'} defaultChecked={false} onChange={(e)=>{setSex(e.currentTarget.value)}}/>
                </div>
            </div>
            <div className="registration-regBtn">
                <button onClick={regAcc}>Регістрація</button>
            </div>
        </div>
    )
};

export default Registration;