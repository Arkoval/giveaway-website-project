import React from "react";
import SimpleStepsElement from './HomeSimpleStepsElement';
import {NavLink} from "react-router-dom";


function SimpleSteps() {
    return (
        <div className={'simpleStepsSection'}>
            <h1 name={'SimpleSteps'}>Wystarczą 4 proste kroki</h1>
            <img src={require("../assets/Decoration.svg")} alt=""/>
            <div className="SimpleStepsBox">
                <SimpleStepsElement
                img={require('../assets/Icon-1.svg')}
                title={'Wybierz rzeczy'}
                content={'ubrania, zabawki, sprzęt i inne'}
                />
                <SimpleStepsElement
                    img={require("../assets/Icon-2.svg")}
                    title={'Spakuj je'}
                    content={'skorzystaj z worków na śmieci'}
                />
                <SimpleStepsElement
                    img={require("../assets/Icon-3.svg")}
                    title={'Zdecyduj komu chcesz pomóc'}
                    content={'wybierz zaufane miejsce'}
                />
                <SimpleStepsElement
                    img={require("../assets/Icon-4.svg")}
                    title={'Zamów kuriera'}
                    content={'kurier przyjedzie w dogodnym terminie'}
                />
            </div>
            <NavLink className={'loginButton'} to={'/logowanie'}>Oddaj rzeczy</NavLink>
        </div>
    )
}

export default SimpleSteps