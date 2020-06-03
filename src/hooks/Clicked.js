import React, { useState } from "react";

const Clicked = () => {
    const [text, setText] = useState("Not clicked");

    const updateText = () => setText("Clicked");

    return(
        <p onClick={ updateText }>{ text }</p>
    );
}

export default Clicked;