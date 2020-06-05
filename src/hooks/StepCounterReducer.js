import React, { useReducer } from "react";

const initialState = {
    steps: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case "PLUS": return {
            ...state,
            steps: state.steps < action.max ? state.steps + action.step : action.max
        };

        case "MINUS": return {
            ...state,
            steps: state.steps > 0 ? state.steps - action.step : 0
        };

        default: return state;
    }
};

const StepCounterReducer = ({ max, step }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>{ state.steps }</p>
            <button onClick={ () => dispatch({type: "PLUS", step, max}) }>+</button>
            <button onClick={ () => dispatch({type: "MINUS", step}) }>-</button>
        </>
    );
}

export default StepCounterReducer;