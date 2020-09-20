import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import Button from '../../UI/Button/Button';
import googleIcon from '../../../assets/Icons/google-logo.png';

//refrest token
import { refreshTokenSetup } from '../RefreshToken/RefreshToken';

const clientId = process.env.REACT_APP_GOOGLE_CLIENTID;

function LoginHooks() {

    const onSuccess = (res) => {
        //console.log('Login Success: currentUser:', res.profileObj);
        //console.log('Token ID', res.tokenId);
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
        responseType: 'code,token'
        // accessType: 'offline',
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
