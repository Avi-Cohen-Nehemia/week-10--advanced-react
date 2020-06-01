import React from "react";

const Counter = ({initial, handleIncrease, handleDecrease, highlighted}) => (
    <div>
        <p style={{ backgroundColor: highlighted ? "yellow" : null }}>{ initial }</p>
        <button onClick={ handleIncrease }>+</button>
        <button onClick={ handleDecrease }>-</button>
    </div>
);

export default Counter;