import React from 'react';
import { useGoogleLogin, GoogleLogin } from 'react-google-login';

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
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export default LoginHooks;
