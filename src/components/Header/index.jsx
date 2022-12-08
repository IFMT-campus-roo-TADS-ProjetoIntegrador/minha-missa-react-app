import React from 'react';
import {Link, useHistory} from 'react-router-dom';

import {Container} from './style';

import Logo from '../../assets/logo/logo-minha-missa.svg';

function Header(){

    const history =  useHistory();

    return(
        <Container>
        <header class="p-3 bg-light text-white">
            <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <img className='logo-minha-missa' src= {Logo} alt=""  />
                </a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/home" class="nav-link px-2 text-dark">Home</Link></li>
                    <li><Link to="/events" class="nav-link px-2 text-dark">Eventos</Link></li>
                    <li><a href="#" class="nav-link px-2 text-dark">Paróquias</a></li>
                    <li><Link href="/about" class="nav-link px-2 text-dark">Sobre Nós</Link></li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" class="form-control form-control-dark" placeholder="Pesquisar" aria-label="Search" />
                </form>

                <div class="text-end">
                <button type="button" class="btn btn-outline-dark me-2" onClick={() => history.push('/login')}>Entrar</button>
                <button type="button" class="btn btn-warning" onClick={() => history.push('/user-register')}> Cadastrar</button>
                </div>
            </div>
            </div>
        </header>
        </Container>
    )
};

export default Header;