import React from 'react';
import GoogleLoginButton from '../../components/GoogleAuth/LoginHooks/LoginHooks';
import { LoginStyle } from './Login.styled';
import { TitleStyle } from '../../components/UI/Title/Title.styled';

const Login = (props) => {
    return (
        <LoginStyle>
            <TitleStyle>Bookstore</TitleStyle>
            <GoogleLoginButton setToken={props.setToken} />
        </LoginStyle>
    );
};

export default Login;
