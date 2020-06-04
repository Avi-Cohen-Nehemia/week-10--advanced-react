import React, { useState } from "react";

let color = (text) => {
    if (text.length === 0) {
        return "transparent";
    }
    
    if (text.length < 9) {
        return "red";
    }

    if (text.length < 16) {
        return "orange";
    }

    return "green";
};

const PasswordStrength = () => {

    const [input, setInput] = useState("");

    const updateInput = (e) => {
        let value = e.currentTarget.value;
        setInput(value);
    };

    return(
        <div>
            <input
                type="password"
                onChange={ updateInput }
                style={{ backgroundColor: color(input) }}
                value={ input }
            />
        </div>
    );
}

export default PasswordStrength;