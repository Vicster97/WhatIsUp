import React from "react";
import "./../App.css"
import Navbar from "../Components/Navbar";

function Home() {
    return (
        <div>
            <Navbar/>
            <div className="page-body">
                <h1 className="page-welcome-message">Welcome to Home page of WhatIsUp?</h1>
            </div>
        </div>
    );
};

export default Home;