import "./sing-in.scss";

const SingIn = (props: {
    setReg: any;
    setSingIn: any;
    users: any;
    setAccountExit: any;
    setEmail: any;
    setPassword: any;
    auditAcc: any;
}) => {
    const { setReg, setSingIn, users } = props;

    const clickReg = () => {
        setSingIn(false);
        setReg(true);
    };

    return (
        <div className="sing-in">
            <div className="sing-in-warning">
                <div className="sing-in-warning_image">
                    <div className="be">
                        <img
                            src="https://img.icons8.com/external-others-inmotus-design/256/external-Info-virtual-keyboard-others-inmotus-design-4.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="sing-in-warning_text">
                    <p>Ввійдіть, щоб продовжити.</p>
                </div>
            </div>
            <div className="sing-in-account">
                <h4>Ввійти в Social Network</h4>
                <input
                    type="text"
                    onChange={(e) => {
                        props.setEmail(e.target.value);
                    }}
                    placeholder="Введіть логін"
                />
                <input
                    type="password"
                    onChange={(e) => {
                        props.setPassword(e.target.value);
                    }}
                    placeholder="Введіть пароль"
                />
                <div className="sing-in-account-error"></div>
                <div className="sing-in-account-btn">
                    <button className="singIn" onClick={props.auditAcc}>
                        Вхід
                    </button>
                </div>
                <button className="reg" onClick={clickReg}>
                    Створити новий аккаунт
                </button>
            </div>
        </div>
    );
};

export default SingIn;
