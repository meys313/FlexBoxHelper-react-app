import React from "react";
import {Link} from "react-router-dom";
import  './header.scss'

import {useState} from "react";

export const Header: React.FC = () => {
    const [displayMenu, setDisplayMenu] = useState(false);

    return(
        <header className="header">
            <div className="container">

                <h1 className="header-title">
                    flex helper
                </h1>


            </div>
        </header>
    )
}