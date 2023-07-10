import React from 'react';
import './style.css';
import BackButton from '../BackButton';


const FrontEndPage = () => (
    <div>
        <h1>React.js</h1>
        <p>
        React.js, ou simplesmente React, é uma biblioteca JavaScript de código aberto para construção de interfaces de 
        usuário, desenvolvida pelo Facebook. A sua principal característica é a criação de componentes reutilizáveis, 
        que permitem aos desenvolvedores construir aplicações web complexas com interfaces dinâmicas de maneira mais 
        eficiente e organizada. React também é conhecido pelo uso do Virtual DOM, uma abstração do DOM real, que 
        ajuda a otimizar a renderização e o desempenho das aplicações. Além disso, a biblioteca pode ser utilizada 
        tanto no desenvolvimento de aplicações de página única (Single Page Applications - SPA) quanto em partes de 
        websites mais tradicionais, e é uma das tecnologias principais no ecossistema de desenvolvimento 
        JavaScript moderno.
        </p>
        <a href='https://reactjs.org'>React.js - Site</a>
        <BackButton />
    </div>
);

export default FrontEndPage;