import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){
    return (
        <div class="container">
            <footer class="py-3 my-4 footer">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link to="/home" class="nav-link px-2 text-muted">Início</Link></li>
                    <li class="nav-item"><Link to="/events" class="nav-link px-2 text-muted">Eventos</Link></li>
                    <li class="nav-item"><Link to="/instituitions" class="nav-link px-2 text-muted">Instituições</Link></li>
                    <li class="nav-item"><Link to="/about" class="nav-link px-2 text-muted">Sobre Nós</Link></li>
                </ul>
                <p class="text-center text-muted">
                    © 2022 IFMT TADS, Inc
                </p>
            </footer>
        </div>
    )
};