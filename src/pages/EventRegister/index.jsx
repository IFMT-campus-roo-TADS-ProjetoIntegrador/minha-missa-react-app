import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import EventRegisterForm from '../../components/EventRegisterForm';

export default function EventRegister(){
    return(
        <div>
            <Header />

            <EventRegisterForm />

            <Footer />
        </div>
    )
}