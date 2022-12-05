import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Event from '../../components/Event';
function Events()
{
    return(
        <>
            <Header />

            <div>
                <h1>
                    Events
                </h1>
                
                <Event />
            </div>

            <Footer />
        </>
    )
}

export default Events;