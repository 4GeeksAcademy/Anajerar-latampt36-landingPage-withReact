import React, { useState, useEffect } from "react";
import Menu from "./navBar.jsx"
import MovileMenu from "./mobileNavBar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Cards from "./cards.jsx"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//import MovileMenu from "./mobileNavBar.jsx";

//const screen = window.innerWidth;
//const [screen, setScreen] = useState(window.innerWidth);

const CardDisplay = () => {
    let CardString = []
    for (let i=0;i<=3;i++) 
        {CardString.push(<Cards key={i}/>)};
    return (CardString)
}

let screenSz=window.innerWidth;

//create your first component
const Home = () => {

// Detecting window size (width)
   function useWindowSize() {
        const [windowSize, setWindowSize] = useState( window.innerWidth);

        function handleResize() {
            setWindowSize( window.innerWidth);
            }
        window.addEventListener('resize', handleResize);
        return windowSize;
    }

    screenSz = useWindowSize();

return (
    <>
        {(screenSz > 500) ? <Menu/> : <MovileMenu/>}
        <Jumbotron/>
        <div className={(screenSz>500) ? "d-flex p-5 justify-content-between" : "d-block p-5 justify-content-center"}
            id="CardsDiv">
            <CardDisplay/>
        </div>   
    </>
)};

export default Home;

