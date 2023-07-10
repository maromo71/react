import React from 'react';
import './style.css';
import BackButton from '../BackButton';


const BackEndPage = () => (
    <div>
        <h1>Node.js</h1>
        <p>
            Node.js é uma plataforma de execução de código JavaScript construída sobre o motor JavaScript 
            V8 do Google Chrome. Ele permite que os desenvolvedores escrevam código no lado do servidor 
            usando JavaScript, tornando a escrita de aplicações web altamente escaláveis ​​mais fácil e eficiente. 
            Além disso, o Node.js é orientado a eventos e não bloqueante, o que significa que é eficaz para 
            lidar com múltiplas conexões simultâneas, tornando-o particularmente útil para aplicações em tempo real, 
            como chat, jogos, ou colaboração em tempo real. Por ser JavaScript, Node.js permite que os desenvolvedores 
            usem o mesmo idioma tanto no lado do cliente quanto no lado do servidor, simplificando o 
            processo de desenvolvimento.
        </p>
        <a href='https://nodejs.org'>Node.js Site</a>
        <BackButton />
    </div>
);

export default BackEndPage;