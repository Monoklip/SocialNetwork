import './my-account.scss';

const MyAccount = (props: { user: any}) => {

    const { user } = props;

    return(
        <div className='my_account'>
            <div className="my_account-details">
                <div className="my_account-details_image">
                    <img src={`${user.image}`} alt="" />
                </div>
                <div className="my_account-details_name">
                    <p>{user.name} {user.surname}</p>
                </div>
            </div>
        </div>
    )
};

export default MyAccount;