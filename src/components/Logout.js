import React from "react";
import {NavLink} from "react-router-dom";

function Logout() {
    return (
        <div className={'logoutScreen'}>
            <h1>Wylogowanie nastąpiło pomyślnie!</h1>
            <img src={require("../assets/Decoration.svg")} alt=""/>
            <NavLink to={'/'}>Strona główna</NavLink>
        </div>
    )
}

export default Logout