import React from "react";
import Card from "../Card";
import './style.css';

function HomePage(){
    return(
        <div className="home-page">
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default HomePage;