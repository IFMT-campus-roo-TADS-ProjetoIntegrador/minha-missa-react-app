import React, { useEffect, useState } from 'react';

import Logo from '../../assets/logo/logo-minha-missa.svg';
import { Container } from './style';

// import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function UserRegisterForm(){

    const history = useHistory();

    // const [user, setUser] = useState();

    // const [name, setName] = useState();
    // const [birth, setBirth] = useState();
    // const [address, setAdress] = useState();
    // const [cep, setCep] = useState();
    // const [ddd, setDdd] = useState();
    // const [phone, setPhone] = useState();
    // const [login, setLogin] = useState();
    // const [password, setPassword] = useState();
 
    

        // const data = {
        //     name : name,
        //     birth_date: birth,
        //     address: address,
        //     cep : cep,
        //     ddd : ddd,
        //     phone_number : phone,
        //     login : login,
        //     password : password
        // };


        // useEffect( async () =>{
        //     api
        //         .post('/users/', data)
        //         .then()
        //         .catch((err) => {
        //             console.error("Ocorreu um erro ao cadastrar o usuário" + err);
        //     });

        // }, [user]);

    return(
        <Container>
        <div className="container">
            <main>
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src={Logo} alt="" width="72" height="57" />
                    <h2>Bem vindo</h2>
                    <p className="lead">
                        Estamos quase lá! Faça seu cadastro para poder desfrutar da experiência de ser um de nossos usuários e participar de vários eventos.
                    </p>
                </div>

                <div className="col-md-7 col-lg-8 personal-information">
                    <form className="needs-validation" novalidate="">
                        <div className="row g-3 userdata">
                            
                            <hr className="my-4" />

                            <div className="col-sm-6">
                                <label for="name" className="form-label">Nome Completo</label>
                                <input type="text" className="form-control" id="name" placeholder="Nome Completo" required="" />
                            </div>

                            <div className="col-sm-6">
                                <label for="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                            </div>

                            <div className="col-sm-6">
                                <label for="password" className="form-label">Senha</label>
                                <input type="password" className="form-control" id="password" placeholder="Insira sua senha" required="" />
                            </div>

                            <div className="col-sm-6">
                                <label for="repeat-password" className="form-label">Repetir Senha</label>
                                <input type="password" className="form-control" id="repeat-password" placeholder="Repita sua senha" required="" />
                            </div>

                        </div>

                        <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={() => history.push('/login')}> Finalizar Cadastro </button>
                    </form>
                </div>
            </main>

        </div>
        </Container>
    )
};