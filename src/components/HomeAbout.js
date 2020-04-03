import React from "react";


function About() {
    return(
        <div name={'About'} className={'aboutSection'}>
            <div className="aboutBackground"></div>
            <div className="aboutBox">
                <h1>O nas</h1>
                <img src={require("../assets/Decoration.svg")} alt=""/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className={'signature'} src={require("../assets/Signature.svg")} alt=""/>
            </div>

        </div>
    )
}

export default About