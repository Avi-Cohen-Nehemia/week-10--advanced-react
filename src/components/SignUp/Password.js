import React from 'react';

const Password = ({label, error, input, handleChange}) => (

    <div>
        <label>
            { label }
            <input
                type="password"
                style={{ borderColor: error ? "red" : "green" }}
                value={ input }
                onChange={ handleChange }
            />
        </label>
    </div>
);

export default Password;