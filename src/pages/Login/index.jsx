import React from "react";

import LoginForm from "../../components/LoginForm";
import { Container } from "./style";
 

function Login(){

    return(
        <Container>
            <div className="cover-container">
                <div className="logo">
                    {/* Aqui vai a logo. */}
                </div>
            </div>
            <div className="login-container">
                <LoginForm />
            </div>
        </Container>
    );
}

export default Login;