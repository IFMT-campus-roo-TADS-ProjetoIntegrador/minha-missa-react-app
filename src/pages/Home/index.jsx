import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Cover from '../../assets/img/cover.png';
import CallToAction from '../../components/CallToAction';


import { Container } from './style';


function Home(){
    return(
        <Container>
            <header>
                <Header />
                <img className="cover" src={Cover} />
            </header>
            <CallToAction />
            <footer>
                <Footer />
            </footer>
        </Container>
        
        
    )
}

export default Home;