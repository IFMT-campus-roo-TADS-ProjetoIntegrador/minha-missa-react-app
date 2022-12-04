import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';


function Home(){
    return(
        <styled>
            <header>
                <Header />
            </header>,
            <footer>
                <Footer />
            </footer>
        </styled>
        
        
    )
}

export default Home;