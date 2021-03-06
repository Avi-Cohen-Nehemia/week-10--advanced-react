import React from 'react';

const Square = ({color, selected, handleClick}) => (

    <div 
        style={{
            height: "200px",
            width: "200px",
            backgroundColor: selected ? "hotpink" : color
        }}
        onClick={ handleClick }
    />
);

export default Square;