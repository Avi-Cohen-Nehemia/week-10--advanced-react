import React, { useState } from "react";

const PasswordStrength = () => {

    const [input, setInput] = useState("");

    const updateInput = (e) => {
        let value = e.currentTarget.value;
        setInput(value);
    };

    let color = (text) => {
        if (text.length === 0) {
            return "white";
        }
        
        if (text.length > 0 && text.length < 9) {
            return "red";
        }

        if (text.length >= 9 && text.length < 16) {
            return "orange";
        }

        return "green";
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