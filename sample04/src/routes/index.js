import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import FrontEndPage from  '../components/FrontEndPage';
import BackEndPage from '../components/BackEndPage';

const MyRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <HomePage />} />
            <Route exact path='/front-end' element={ <FrontEndPage />} />
            <Route exact path='/back-end' element={ <BackEndPage />} />
        </Routes>
    </BrowserRouter>
);

export default MyRoutes;