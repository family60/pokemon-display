import React from "react";

const Sprite = ({sprite, shinySprite}) => {
    return(
        <div>
            <img src={sprite}></img>
            <img src={shinySprite}></img>
        </div>
    )
}

export default Sprite;