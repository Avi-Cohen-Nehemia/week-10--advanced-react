import React, { useState } from "react";

const List = () => {

    const [input, setInput] = useState("");

    const updateInput = (e) => {

        let value = e.currentTarget.value;

        setInput(value);
    };

    const [list, setList] = useState([]);

    const updateList = (e) => {

        e.preventDefault();

        setList([...list, input]);
        setInput("");
    };

    return (
        <div>
            <form onSubmit={ updateList }>
                <input
                    value={ input }
                    onChange={ updateInput }
                />
                <button>Add</button>
            </form>
            <ul>
                { list.map((item, index) => (
                    <li key={ index }>{ item }</li>
                )) }
            </ul>
        </div>
    );
}

export default List;