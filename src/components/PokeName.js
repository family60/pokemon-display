import React from "react";

const PokeName = ({name}) => {
    return(
        <div>
            <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        </div>
    )
}

export default PokeName;