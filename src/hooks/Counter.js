import React, { useState } from "react";

const Counter = ({ initial, max }) => {
    const [counter, setCounter] = useState(initial);

    const addCounter = () => setCounter(counter < max ? counter + 1 : max);
    const substructCounter = () => setCounter(counter > 0 ? counter - 1 : 0);

    return(
        <> 
            <p>{ counter }</p>
            <button onClick={ addCounter }>+</button>
            <button onClick={ substructCounter }>-</button>
        </>
    );
}

export default Counter;