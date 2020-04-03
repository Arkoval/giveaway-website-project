import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import React from "react";



function Navigation() {
    return (<div className="navBar">
        <ul className={'loginNav'}>
            <li><NavLink to={'/logowanie'}>Zaloguj</NavLink></li>
            <li><NavLink to={'/rejestracja'}>Załóż konto</NavLink></li>
        </ul>
        <ul className={'nav'}>
            <li><NavLink className={'homeButton'} to={'/'}>Start</NavLink></li>
            <li><Link to={'SimpleSteps'}>O co chodzi?</Link></li>
            <li><Link to={'About'}>O nas</Link></li>
            <li><Link to={'#'}>Fundacja i organizacje</Link></li>
            <li><Link to={'Contact'}>Kontakt</Link></li>
        </ul>
        </div>
    )
}

export default Navigation