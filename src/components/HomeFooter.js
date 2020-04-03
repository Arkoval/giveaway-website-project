import React from "react";

function Footer() {
    return (
        <footer>
        <h2>Copyright by CodersLab</h2>
            <div className="footerIcons">
                <img src={require("../assets/Facebook.svg")} alt=""/>
                <img src={require("../assets/Instagram.svg")} alt=""/>
            </div>
        </footer>
    )
}

export default Footer