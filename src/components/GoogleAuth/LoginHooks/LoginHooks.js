import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import Button from '../../UI/Button/Button';
import googleIcon from '../../../assets/Icons/google-logo.png';

//refrest token
import { refreshTokenSetup } from '../RefreshToken/RefreshToken';

const clientId =
    '1032311259786-8ng5p7orh8rbf3pluscibuvv3mdrs3t6.apps.googleusercontent.com';

function LoginHooks() {
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res', res);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
    });

    return (
        <Button
            itemType='google'
            click={signIn}
            icon={googleIcon}
            alt='google-icon'
            title='Login with Google'
        />
    );
}

export default LoginHooks;
