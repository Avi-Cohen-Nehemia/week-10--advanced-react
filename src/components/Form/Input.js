import React from 'react';

const Input = ({label, type, value, handleChange}) => (

    <div>
        <label>
            { label }
            <input
                className="form-control"
                type={ type }
                value={ value }
                onChange={ handleChange }
            />
        </label>
    </div>
);

export default Input;