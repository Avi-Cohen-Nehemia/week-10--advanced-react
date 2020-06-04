import React, { useReducer } from "react";

const initialState = {
    clicked: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case "CLICKED": return {
            ...state,
            clicked: true,
        };

        default: return state;
    }
};

const ClickedReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <p onClick={ () => dispatch({type: "CLICKED"}) }>{state.clicked ? "Clicked" : "Not clicked"}</p>
    );
}

export default ClickedReducer;