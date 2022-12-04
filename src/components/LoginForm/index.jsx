import React from "react";
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/logo/logo-minha-missa.svg';

function LoginForm(){

    const history = useHistory;

    return(
        <div id="login-container">
        <main class="form-sing-in text-center">
            <form>
                <img className="logo-minha-missa" src={Logo} alt="Logo Minha Missa React App" />
                <h5 class="h3 mb-3 fw-normal">Login</h5>

                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={() => history.push('/home')}>
                    Sign in
                </button>

                
                <p class="mt-5 mb-3 text-muted">
                    <i className="icon pi pi-globe" style={{'fontSize': '0.8em'}}></i>
                      IFMT - Projeto Integrador | 2022
                </p>

            </form>
        </main>
        </div>
    )
}

export default LoginForm;