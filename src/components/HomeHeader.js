import React from "react";
import {NavLink} from "react-router-dom";




function HomeHeader() {
    return (
        <header>
            <div className={'headerRight'}>
                    <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={require("../assets/Decoration.svg")} alt=""/>
                    <ul>
                        <li><NavLink className={'loginButton'} to={'/logowanie'}>Oddaj<br/>rzeczy</NavLink></li>
                        <li><NavLink className={'loginButton'} to={'/logowanie'}>Zorganizuj<br/>zbiórkę</NavLink></li>
                    </ul>
            </div>
        </header>
    )

}

export default HomeHeader