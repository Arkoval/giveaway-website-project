import React from "react";

function HomeGiveHeader() {
    return (
        <div className={'headerGive'}>
            <div className={'homeGiveHero'}></div>
            <div className={'headerGiveRight'}>
                <h1>Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</h1>
                <img src={require("../assets/Decoration.svg")} alt=""/>
                <h2>Wystarczą 4 proste kroki:</h2>
                <ul>
                    <li><h2>1</h2>Wybierz<br/>rzeczy</li>
                    <li><h2>2</h2>Spakuj je<br/>w worki</li>
                    <li><h2>3</h2>Wybierz<br/>fundację</li>
                    <li><h2>4</h2>Zamów<br/>kuriera</li>
                </ul>
            </div>
        </div>
    )

}

export default HomeGiveHeader