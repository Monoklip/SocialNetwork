import { Link } from 'react-router-dom';
import './menu.scss';

const Menu = (props: { setAccountExit: (arg0: string) => void; }) => {

    const exitAcc = () => {
        localStorage.removeItem('SocialNetwork');
        localStorage.removeItem('User');
        props.setAccountExit('');
    };
    
    return(
        <div className='menu'>
            <Link to={'/'}><div><span>Головна</span></div></Link>
            <Link to={'/image'}><div><span>Фотографії</span></div></Link>
            <Link to={'/friends'}><div><span>Друзі</span></div></Link>
            <Link to={'/message'}><div><span>Повідомлення</span></div></Link>
             <button onClick={exitAcc}>Вихід</button>
        </div>
    )
};

export default Menu;