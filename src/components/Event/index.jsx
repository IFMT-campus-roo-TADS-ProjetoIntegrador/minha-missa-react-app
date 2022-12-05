import React, {useState, useEffect} from 'react';

import { Container } from './style.js';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom';

// import api from '../../services/api';

import Cover from '../../assets/img/cover.png';

export default function Event(){

    const history = useHistory();
    const [products, setProducts] = useState([]);

    // useEffect( async () => {

    //     // const response = await fetch('http://localhost:3333/api');
    //     // const data = await response.json();

    //     api
    //         .get('/products')
    //         .then((response) => setProducts(response.data))
    //         .catch((err) => {
    //             console.error("Ocorreu um erro" + err);
    //         });
    // }, []);

    // function addCart(_id){
    //     // .post('/purchase')
    //     history.push(`/purchase/id=${_id}`);
    // }

    return(
        <Container>
            {/* <Container>
                <div className="products">
                {products.map(prod => (
                    <div className="product" key={prod.id}>
                        <div className="package-cover">
                            <img className="img-cover" src= {prod.img_title} alt="" />
                        </div>
                        
                        <div className="title">
                            <h3> {prod.name } </h3>
                        </div>

                        <div className="description">
                            
                            <p> {prod.description} </p>

                            <div className="items-description">
                            <span className="hotel">
                                <i className="pi pi-home"></i>
                                {prod.hotel_name}
                            </span>
                            <br />
                            <span className="location">
                                <i className="pi pi-map-marker"></i>
                                {prod.city}
                            </span>
                            <br />
                            <span className="price">
                                <i className="pi pi-money-bill"></i>
                                {prod.price}
                            </span>
                            <br />
                            <span className="days">
                                <i className="pi pi-calendar"></i>
                                {prod.days}
                            </span>
                        </div>
                        </div>

                        <div className="buttons">
                            <Button label="Comprar" icon="pi pi-plus" iconPos="right" onClick={() => addCart(prod.id)} />
                        </div>
                    </div>
                ))}

                </div>
            </Container> */}

            <div className="package-cover">
                <img className="img-cover" src={Cover} alt="" />
            </div>
            <div className="description">
                <h3> Igraja Aleatória </h3>
                <p>
                    O Estádio Anfield é um estádio localizado em Liverpool, Inglaterra. 
                    É a casa do time de futebol Liverpool FC e um dos estádios considerados 
                    5 Estrelas pela UEFA. 
                </p>
                <div className="items-description">
                    <span className="hotel">
                        <i className="pi pi-home"></i>
                        Alguma Igreja
                    </span>
                    <br />
                    <span className="location">
                        <i className="pi pi-map-marker"></i>
                        AlgunLugar-Brasil
                    </span>
                    <br />
                    <span className="price">
                        <i className="pi pi-money-bill"></i>
                        R$ 500,00
                    </span>
                    <br />
                    <span className="days">
                        <i className="pi pi-calendar"></i>
                        2 dias
                    </span>
                </div>
            </div>
        </Container>
    )
};