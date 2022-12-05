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
                <div className="col-md-7 col-lg-8 personal-information">
                    <form className="needs-validation" novalidate="">
                        <div className="row g-3 userdata">
                            
                            <hr className="my-4" />

                            <div className="col-sm-6">
                                <label for="name" className="form-label">Nome do evento</label>
                                <input type="text" className="form-control" id="name" placeholder="Nome do evento" required="" />
                            </div>

                            <div className="col-sm-6">
                                <label for="local" className="form-label">Local</label>
                                <input type="text" className="form-control" id="local" placeholder="Local" required="" />
                            </div>

                            <div className="col-sm-6">
                                <label for="description" className="form-label">Descrição</label>
                                <input type="text-area" className="form-control" id="description" placeholder="Descrição" required="" />
                            </div>

                            <div className="col-sm-6">
                                <label for="date" className="form-label">Data e hora</label>
                                <input type="date" className="form-control" id="date" placeholder="" required="" />
                            </div>

                            <div className="col-sm-6">
                                <label for="duration" className="form-label">Duração</label>
                                <input type="text" className="form-control" id="duration" placeholder="" required="" />
                            </div>

                            <div className="col-sm-6">
                                <label for="vagas" className="form-label">Vagas</label>
                                <input type="text" className="form-control" id="vagas" placeholder="" required="" />
                            </div>

                            <div className="col-sm-6">
                                <label for="instituition" className="form-label">Instituição</label>
                                <input type="text" className="form-control" id="instituition" placeholder="Instituição" required="" />
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