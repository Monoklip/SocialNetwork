import { useEffect, useState } from "react";

const Messages =()=>{

    const[data, setData] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/user/1/message');
    
    const getMessage = async() => {
        const response = await fetch(url)
    };

    useEffect(()=>{
        getMessage();
    },[]);

    console.log(data);
    

    return(
        <div></div>
    )
};

export default Messages;