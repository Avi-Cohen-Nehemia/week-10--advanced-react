import React, { useState } from "react";

const CatchMeIfYouCan = ({ jump }) => {
    const [height, setHeight] = useState(0);

    const updateHeight = () => setHeight(height + jump);

    return(
        <div>
            <button
                style={{
                    position: "relative",
                    top: height + "px"
                }}
                onClick={ updateHeight }
            >
                Catch Me!
            </button>
        </div>
    );
}

export default CatchMeIfYouCan;