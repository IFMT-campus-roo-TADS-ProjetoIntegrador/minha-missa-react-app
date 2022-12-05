import React from 'react';

import Cover from '../../assets/img/cover.jpg';
import BomPastor from '../../assets/carousel/paroquia-bom-pastor-rondonopolis-mt.jfif';
import NSA from '../../assets/carousel/paroquia-nossa-senhora-aparecida-rondonopolis-mt.jpg';
import Sagrado from '../../assets/carousel/paroquia-sagrado-coracao-de-jesus-rondonopolis-mt.jpg';
import SantaCruz from '../../assets/carousel/paroquia-santa-cruz-rondonopolis-mt.jpg';
import Terezinha from '../../assets/carousel/paroquia-santa-terezinha-do-menino-jesus-rondonopolis-mt.jfif';
import JoaoBosco from '../../assets/carousel/paroquia-sao-joao-bosco-rondonopolis-mt.jfif';
import JoseEsposo from '../../assets/carousel/paroquia-sao-jose-esposo-rondonopolis-mt.jfif';
import JoseOperario from '../../assets/carousel/paroquia-sao-jose-operario-rondonopolis-mt';


import { Container } from './style';

export default function Carousel(){
    return(
            <Container>
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <figure>
                            <img src={BomPastor} alt="" />
                            <figcaption>
                                <h2> Paróquia Bom Pastor </h2>
                                <p>
                                    As missas acontecem principalmente aos domingos ás 18h e 30min
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={NSA} alt="" />
                            <figcaption>
                                <h2> Paróquia Nossa Senhora Aparecida </h2>
                                <p>
                                    Participe das missas diárias ás 6h
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={Sagrado} alt="" />
                            <figcaption>
                                <h2> Paróquia Sagrado Coração de Jesus </h2>
                                <p>
                                    
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={Cover} alt="" />
                            <figcaption>
                                <h2> Praia </h2>
                                <p>
                                    Temos muitos pacotes com boas praias
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={Coliseum} alt="" />
                            <figcaption>
                                <h2> Explore a cidade de Roma </h2>
                                <p>
                                    Roma, a capital da Itália, é uma cidade cosmopolita, enorme, com quase 3.000 anos de arte, arquitetura e cultura influentes no mundo todo e à mostra.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={Louvre} alt="" />
                            <figcaption>
                                <h2> Museu do Louvre </h2>
                                <p>
                                    Conheça o maior museu de arte do mundo e um monumento histórico em Paris.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={Island} alt="" />
                            <figcaption>
                                <h2> Praias paradisíacas em ilhas desertas </h2>
                                <p>
                                Desfrute dessa experiência de conhecer praias paradisíacas em olhas desertas próximas ao Brasil
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item"><img src={Lake} alt="" /></div>
                    <div className="item"><img src={Montain} alt="" /></div>
                    <div className="item"><img src={Road} alt="" /></div>
                    <div className="item"><img src={Tokyo} alt="" /></div>
                </div>
            </Container>
    )
}