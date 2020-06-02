import React from 'react';

const Password = ({label, valid, input, handleChange}) => (

    <div>
        <label>
            { label }
            <input
                type="password"
                style={{ borderColor: valid ? "green" : "red" }}
                value={ input }
                onChange={ handleChange }
            />
        </label>
    </div>
);

export default Password;