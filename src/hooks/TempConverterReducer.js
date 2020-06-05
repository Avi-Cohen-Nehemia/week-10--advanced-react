import React, { useReducer } from "react";

const initialState = {
    fahrenheit: "",
    celsius: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "FAHRENHEIT": return {
            ...state,
            fahrenheit: action.value,
            celsius: action.value ? (action.value - 32) / 1.8 : "",
        };

        case "CELSIUS": return {
            ...state,
            fahrenheit: action.value ? action.value * 1.8 + 32 : "",
            celsius: action.value,
        };

        default: return state;
    }
};

const TempConverterReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <label>
                Fahrenheit
                <input
                    value={ state.fahrenheit }
                    onChange={ (e) => dispatch({type: "FAHRENHEIT", value: e.currentTarget.value}) }
                />
            </label>

            <label>
                Celsius
                <input
                    value={ state.celsius }
                    onChange={ (e) => dispatch({type: "CELSIUS", value: e.currentTarget.value})  }
                />
            </label>
        </div>
    );
}

export default TempConverterReducer;