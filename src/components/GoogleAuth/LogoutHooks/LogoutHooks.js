import React from 'react';
import { useGoogleLogin, GoogleLogout } from 'react-google-login';

const clientId =
    '1032311259786-8ng5p7orh8rbf3pluscibuvv3mdrs3t6.apps.googleusercontent.com';

function LogoutHooks() {
    const onLogoutSuccess = (res) => {
        alert('logged out successfully ✌');
    };

    const onFailure = () => {
        console.log('Handle failure cases');
    };

    const { signOut } = useGoogleLogin({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={onLogoutSuccess}
                style={{marginTop: '15px'}}
            />
        </div>
    );
}

export default LogoutHooks;
