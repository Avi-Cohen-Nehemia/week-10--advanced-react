import React, { useState } from "react";

const Clicked = () => {
    const [click, setClick] = useState("Not clicked");

    const updateClick = () => setClick("Clicked");

    return <p onClick={ updateClick }>{ click }</p>;
}

export default Clicked;