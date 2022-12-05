import React from 'react';

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
                                    As missas acontecem principalmente aos domingos ás 18h e 30min.
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
                                    Participe das missas diárias ás 6h.
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
                                    Participe das missas diárias ás 6h.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={SantaCruz} alt="" />
                            <figcaption>
                                <h2> Paróquia Santa Cruz </h2>
                                <p>
                                    Participe das missas diárias ás 6h.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={Terezinha} alt="" />
                            <figcaption>
                                <h2> Paróquia Santa Terezinha </h2>
                                <p>
                                    Participe das missas diárias ás 6h.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={JoaoBosco} alt="" />
                            <figcaption>
                                <h2> Paróquia São João Bosco </h2>
                                <p>
                                    Participe das missas diárias ás 6h.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={JoseEsposo} alt="" />
                            <figcaption>
                                <h2> Paróquia São José Esposo </h2>
                                <p>
                                    Participe das missas diárias ás 6h.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={JoseOperario} alt="" />
                            <figcaption>
                                <h2> Paróquia São José Operário </h2>
                                <p>
                                    Participe das missas diárias ás 6h.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </Container>
    )
}