import React, { useState } from "react";

const RollCall = ({ names }) => {
    const [index, setIndex] = useState(0);

    const updateIndex = () => setIndex((index + 1) % names.length);

    return(
        <div>
            <p>{ names[index] }</p>
            <button onClick={ updateIndex }>Next</button>
        </div>
    );
}

export default RollCall;