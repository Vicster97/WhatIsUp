import React from "react";
import "./../App.css"
import Navbar from "../Components/Navbar";

function Data() {
    return (
        <div>
            <Navbar/>
            <div className="page-body">
                <h1 className="page-welcome-message">Welcome to Data Page of WhatIsUp?</h1>
            </div>
        </div>
    );
};

export default Data;