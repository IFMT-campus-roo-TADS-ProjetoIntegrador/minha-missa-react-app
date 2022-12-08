import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';


import { Container } from './style';
import AboutUsText from '../../components/AboutUsText';


function AboutUs(){
    return(
        <Container>
            <header>
                <Header />
            </header>
            <AboutUsText />
            <footer>
                <Footer />
            </footer>
        </Container>
    )
}

export default AboutUs;