import React from "react";

const Stats = ({baseStatTotal, health, attack, defence, specialAttack, specialDefence, speed}) => {
    return(
        <div>
            <h3>Stats</h3>
            <h5>Health: {health}</h5>
            <h5>Attack: {attack}</h5>
            <h5>Defence: {defence}</h5>
            <h5>Special Attack: {specialAttack}</h5>
            <h5>Special Defence: {specialDefence}</h5>
            <h5>Speed: {speed}</h5>
            <h5>Base Stat Total: {baseStatTotal}</h5>
        </div>
    )
}

export default Stats;