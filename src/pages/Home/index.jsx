import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Cover from '../../assets/img/cover.png';
import CallToAction from '../../components/CallToAction';
import Carousel from '../../components/Carousel';


import { Container } from './style';
import CarouselBootS from '../../components/CarouselBootS';


function Home(){
    return(
        <Container>
            <header>
                <Header />
                <img className="cover" src={Cover} />
            </header>
            <CallToAction />

            <CarouselBootS />
            <footer>
                <Footer />
            </footer>
        </Container>
        
    )
}

export default Home;