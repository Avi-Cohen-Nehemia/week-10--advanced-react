import React, { useState } from "react";

const Square = ({ color }) => {
    const [toggle, setToggle] = useState(false);

    const updateToggle = () => setToggle(!toggle);

    return(
        <div 
            onClick={ updateToggle }
            style={{
                height: "200px",
                width: "200px",
                backgroundColor: toggle ? color : "green"
            }}
        />
    );
}

export default Square;