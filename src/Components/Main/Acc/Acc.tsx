import { useEffect, useState } from "react";
import Registration from "./Registration/Registration";
import SingIn from "./SingIn/SingIn";

const Acc = (props: { setAccountExit: any; }) => {

    const [reg, setReg] = useState(false);
    const [singIn, setSingIn] = useState(true);

    const [users, setUsers] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/user');

    const getUsers = async() => {
        const response = await fetch(url);
        const data = await response.json();

        setUsers(data);
    };

    useEffect(()=>{
        getUsers();
    },[]);

    return(
        <>
            {reg && <Registration />}
            {singIn && <SingIn setReg={setReg} setSingIn={setSingIn} users={users} setAccountExit={props.setAccountExit}/>}
        </>
    )
};

export default Acc;