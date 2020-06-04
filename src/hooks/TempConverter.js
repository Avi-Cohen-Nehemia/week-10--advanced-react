import React, { useState } from "react";

const TempConverter = () => {

    const [fahrenheit, setFahrenheit] = useState("");

    const updateFahrenheit = (e) => {
        let value = e.currentTarget.value;
        setFahrenheit(value);
        setCelsius(value ? (value - 32) / 1.8 : "");
    };

    
    const [celsius, setCelsius] = useState("");

    const updateCelsius = (e) => {
        let value = e.currentTarget.value;
        setCelsius(value);
        setFahrenheit(value ? value * 1.8 + 32 : "");
    };

    return(
        <div>
            <label>
                Fahrenheit
                <input
                    value={ fahrenheit }
                    onChange={ updateFahrenheit }
                />
            </label>

            <label>
                Celsius
                <input
                    value={ celsius }
                    onChange={ updateCelsius }
                />
            </label>
        </div>
    );
}

export default TempConverter;