import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import Button from '../../UI/Button/Button';
import googleIcon from '../../../assets/Icons/google-logo.png';

//refrest token
import { refreshTokenSetup } from '../RefreshToken/RefreshToken';

const clientId = process.env.REACT_APP_GOOGLE_CLIENTID;

function LoginHooks(props) {

    const onSuccess = (res) => {
        props.setLogin(true);
        props.setToken(res.accessToken);
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res', res);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,//props.loggedIn,
        prompt: 'consent',
        responseType: 'code,token',
        accessType: 'offline',
        cookiePolicy: 'single_host_origin',
        scope: 'https://www.googleapis.com/auth/books'
        
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
