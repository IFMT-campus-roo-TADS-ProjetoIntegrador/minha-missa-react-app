import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './style';

export default function AboutUsText(){

    const history = useHistory();

    return(
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Sobre Nós</h1>
                    <p class="lead text-muted">
                        Nós somos a Igreja Católica de Rondonópolis-MT, responsável pela publicação e gerenciamento dos eventos divulgados neste site. Nós somos a Diocese de Rondonópolis-Guiratinga, que apoia a implementação deste website por se preocupar com a participação dos fiéis da cidade em eventos de evangelização. </p>
                    <p>
                    <a href="#" class="btn btn-primary my-2">Ver Paróquias</a>
                    <a href="#" class="btn btn-secondary my-2">Ver Eventos</a>
                    </p>
                </div>
            </div>
        </section>
    )
};