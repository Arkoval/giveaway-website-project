import React from "react";
import {NavLink} from "react-router-dom";
import {Link} from 'react-scroll';

// import HomeHeroImage from '../assets/Home-Hero-Image.jpg'

function LoginNav() {
    return (<ul className={'loginNav'}>
        <li><NavLink to={'/logowanie'}>Zaloguj</NavLink></li>
        <li><NavLink to={'/rejestracja'}>Załóż konto</NavLink></li>
    </ul>)
}

function Navigation() {
    return (
        <ul className={'nav'}>
            <li><Link to={'#'}>Start</Link></li>
            <li><Link to={'#'}>O co chodzi?</Link></li>
            <li><Link to={'#'}>O nas</Link></li>
            <li><Link to={'#'}>Fundacja i organizacje</Link></li>
            <li><Link to={'#'}>Kontakt</Link></li>
        </ul>
    )
}

function HomeHeader() {
    return (
        <header>
            <img className={'headerHero'} src={require('../assets/Home-Hero-Image.jpg')} alt=""/>
            <div className={'headerRight'}>
                <div className="navBar">
                    <LoginNav/>
                    <Navigation/>
                </div>
                <div className={'headerCenter'}>
                    <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={require("../assets/Decoration.svg")} alt=""/>
                    <ul>
                        <li><NavLink to={'/logowanie'}>Oddaj<br/>rzeczy</NavLink></li>
                        <li><NavLink to={'/logowanie'}>Zorganizuj<br/>zbiórkę</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )

}

export default HomeHeader