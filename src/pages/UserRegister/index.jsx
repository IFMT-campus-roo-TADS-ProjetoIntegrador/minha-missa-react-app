import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import UserRegisterForm from '../../components/UserRegisterForm';

export default function RegisterPage(){
    return(
        <div>
            <Header />

            <UserRegisterForm />

            <Footer />
        </div>
    )
}