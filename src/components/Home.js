import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from './HomeThreeColumns'
import SimpleSteps from "./HomeSimpleSteps";
import About from "./HomeAbout";
import WhoWeHelp from "./HomeWho";
import Footer from "./HomeFooter";
import Contact from "./HomeContact";

function Home(){
    return (
        <>
        <HomeHeader/>
        <HomeThreeColumns/>
        <SimpleSteps/>
        <About/>
        <WhoWeHelp/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home