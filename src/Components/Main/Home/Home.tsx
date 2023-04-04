import Menu from './Menu/Menu';
import MyAccount from './MyAccount/MyAccount';
import './home.scss';
import { useState } from 'react';

const Home = (props: { setAccountExit: (arg0: string) => void; }) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('User') as string));

    return(
        <div className='home'>
            <Menu setAccountExit={props.setAccountExit}/>
            <MyAccount user={user}/>
        </div>
    )
};

export default Home;