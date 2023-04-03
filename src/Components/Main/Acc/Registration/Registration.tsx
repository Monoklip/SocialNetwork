import './registration.scss';

const Registration = () => {
    return(
        <div className='registration'>
            <div className="registration-title">
                <h1>Створити аккаунт</h1>
                <p>швидко та легко</p>
            </div>
            <div className="registration-data">
                <input type="text" className='nameInp' placeholder='І`мя'/>
                <input type="text" className='surnameInp' placeholder='Фамілія'/>
                <input type="text" className='emailInp' placeholder='Номер мобільного або E-mail'/>
                <input type="text" className='passwordInp' placeholder='Пароль'/>
            </div>
            <p>Дата народежння:</p>
            <div className="registration-date">
                <select>
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
                <select>
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
                <select>
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
        </div>
    )
};

export default Registration;