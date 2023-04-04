import { useEffect, useState } from "react";
import Registration from "./Registration/Registration";
import SingIn from "./SingIn/SingIn";

const Acc = (props: {
    setAccountExit: any;
    users: any;
    getUsers: any;
    setEmail: any;
    setPassword: any;
    auditAcc: any;
}) => {
    const [reg, setReg] = useState(false);
    const [singIn, setSingIn] = useState(true);

    return (
        <>
            {reg && (
                <Registration
                    setReg={setReg}
                    setSingIn={setSingIn}
                    users={props.users}
                    getUsers={props.getUsers}
                />
            )}
            {singIn && (
                <SingIn
                    setReg={setReg}
                    setSingIn={setSingIn}
                    users={props.users}
                    setAccountExit={props.setAccountExit}
                    setEmail={props.setEmail}
                    setPassword={props.setPassword}
                    auditAcc={props.auditAcc}
                />
            )}
        </>
    );
};

export default Acc;
