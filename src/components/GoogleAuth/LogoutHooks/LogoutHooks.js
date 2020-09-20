import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import Button from '../../UI/Button/Button';
import LogoutStyle from './LogoutHooks.styled';
import googleIcon from '../../../assets/Icons/google-logo.png';

const clientId = process.env.REACT_APP_GOOGLE_CLIENTID;

function LogoutHooks() {
    const onLogoutSuccess = (res) => {
        alert('logged out successfully ✌');
    };

    const onFailure = () => {
        console.log('Handle failure cases');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

    return (
        <LogoutStyle>
            <Button
                itemType='detailed'
                click={signOut}
                icon={googleIcon}
                alt='google-icon'
                title='Log Out'
            />
        </LogoutStyle>
    );
}

export default LogoutHooks;
