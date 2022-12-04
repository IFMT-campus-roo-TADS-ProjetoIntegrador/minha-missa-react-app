import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './style';

export default function Text(){

    const history = useHistory();

    return(
        <Container>  
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold"> Bora para Missa? </h1>
                <p class="col-md-8 fs-4 text">
                Os maiores  eventos da igreja  católica de Rondonópolis e da região, com informações privilegiadas estão aqui, confira!
                </p>
                <button class="btn btn-primary btn-lg" type="button" onClick={ () => history.push('/travels')}> Conferir aqui os eventos  da semana! </button>
            </div>
        </Container>
    )
};