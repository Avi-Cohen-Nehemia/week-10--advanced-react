import React, { useState } from "react";

const StepCounter = ({ step, max }) => {
    const [steps, setSteps] = useState(0);

    const addSteps = () => setSteps(steps < max ? steps + step : max);
    const substructSteps = () => setSteps(steps > 0 ? steps - step : 0);

    return(
        <> 
            <p>{ steps }</p>
            <button onClick={ addSteps }>+</button>
            <button onClick={ substructSteps }>-</button>
        </>
    );
}

export default StepCounter;