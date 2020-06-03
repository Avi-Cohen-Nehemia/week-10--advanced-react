import React, { useState } from "react";

const ToggleText = ({ initial, alternate }) => {
    const [text, setText] = useState(initial);

    const updateText = () => setText(text === initial ? alternate : initial);

    return(
        <> 
            <p>{ text }</p>
            <button onClick={ updateText }>Toggle</button>
        </>
    );
}

export default ToggleText;