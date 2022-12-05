import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Events()
{
    return(
        <>
            <Header />

            <div>
                <h1>
                    Events
                </h1>
                <ol>
                    <li>Missa de Natal</li>
                    <li>Missa de Ano Novo</li>
                    <li>Cenáculo Mariano</li>
                </ol>
            </div>

            <Footer />
        </>
    )
}

export default Events;