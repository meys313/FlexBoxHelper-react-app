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
                <div className="header-menu" onClick={()=> setDisplayMenu(prevState => !prevState)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <nav className={`header-navigate ${displayMenu? 'active' : ''}`}>
                    <ul>
                        <li>
                            <Link to="" className="header-navigate__link">о проекте</Link>
                        </li>
                        <li>
                            <Link to="" className="header-navigate__link">ссылка на репозиторий</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}