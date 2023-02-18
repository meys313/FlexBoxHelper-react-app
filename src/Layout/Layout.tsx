import React from "react";
import styles from './Layout.module.scss'
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
export const Layout: React.FC = () => {
    return(
        <div className={styles.layout}>
            <Header/>
            <main>
                <Outlet/>
            </main>
           <Footer/>
        </div>
    )
}