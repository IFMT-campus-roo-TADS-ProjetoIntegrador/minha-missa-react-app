import React from "react";

import { Password } from 'primereact/password'; 
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { LoginStyle } from "./style";

function LoginForm(){

    return(
        <>
            <LoginStyle>
                <h5>Login</h5>
                <InputText className="input" placeholder="Usuário" />
                <Password className="password" placeholder="Senha" toggleMask />
                <Button label="Entrar" icon="pi pi-check" iconPos="right" />
            </LoginStyle>  
        </>
    )
}

export default LoginForm;