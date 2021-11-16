import React from "react";
import "./../App.css"
import Navbar from "../Components/Navbar";

function Home() {
    return (
        <div>
            <Navbar/>
            <div className="page-body">
                <h1 className="page-welcome-message">Welcome to Home page of WhatIsUp?</h1>
                <h3 className="page-message"> This website is build with the purpose of analysing, visualising and improve the undertsanding of the climate processes in the atmosphere. </h3>
            </div>
        </div>
    );
};

export default Home;