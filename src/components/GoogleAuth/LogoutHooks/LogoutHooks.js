import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import Button from '../../UI/Button/Button';
import googleIcon from '../../../assets/Icons/google-logo.png';

const clientId =
    '1032311259786-8ng5p7orh8rbf3pluscibuvv3mdrs3t6.apps.googleusercontent.com';

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
        <Button
            itemType='detailed'
            click={signOut}
            icon={googleIcon}
            alt='google-icon'
            title='Log Out'
        />
    );
}

export default LogoutHooks;
