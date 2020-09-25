import React, {useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import {Characters} from "./component/Characters";
import {Planets} from "./component/Planets";

export const Home = () => {
    const [count, setCount] = useState (["Luke Skywalker", "CP3PO", "Darth Vader"]);
    const [planets, setPlanets] = useState (["Planet 1", "Planet 2", "Planet 3"]);

    return(
        <div>
           
            {characters.map((item, index) => {
                return => <Characters key={index} name={item.name}/>
            })}
            {planets.map((item, index) => {
                return => <Planets key={index} name={item.name}/>
            })}

        </div>
    )
}
