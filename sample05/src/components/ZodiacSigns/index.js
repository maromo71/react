import React from 'react';
import './style.css';
import AppTitle from '../AppTitle';
import ListItem from '../ListItem';

export default function ZodiacSigns() {
    return (
        <div>
            <AppTitle />
            <div className='lista'>
                <ListItem signo="Aquário" dataInicio="21/01" dataFim="19/02" imagem="assets/aquario.jpg" />
                <ListItem signo="Peixes" dataInicio="20/02" dataFim="20/03" imagem="assets/peixes.jpg" />
                <ListItem signo="Áries" dataInicio="21/03" dataFim="20/04" imagem="assets/aries.jpg" />
                <ListItem signo="Touro" dataInicio="21/04" dataFim="21/05" imagem="assets/touro.jpg" />
                <ListItem signo="Gêmeos" dataInicio="22/05" dataFim="21/06" imagem="assets/gemeos.jpg" />
                <ListItem signo="Cancer" dataInicio="22/06" dataFim="23/07" imagem="assets/cancer.jpg" />
                <ListItem signo="Leão" dataInicio="24/07" dataFim="23/08" imagem="assets/leao.jpg" />
                <ListItem signo="Virgem" dataInicio="24/08" dataFim="23/09" imagem="assets/virgem.jpg" />
                <ListItem signo="Libra" dataInicio="24/09" dataFim="23/10" imagem="assets/libra.jpg" />
                <ListItem signo="Escorpião" dataInicio="24/10" dataFim="22/11" imagem="assets/escorpiao.jpg" />
                <ListItem signo="Sagitário" dataInicio="23/11" dataFim="21/12" imagem="assets/sagitario.jpg" />
                <ListItem signo="Capricórnio" dataInicio="22/12" dataFim="20/01" imagem="assets/capricornio.jpg" />

            </div>
        </div>
    );
}