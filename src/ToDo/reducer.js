import React, { useReducer } from "react";

export const addItem = (state, { value }) => {

    return {
        ...state,
        items: [...state.items, {
            task: value,
            completed: false
        }]
    };
};

export const removeItem = (state, { index }) => {

    return {
        ...state,
        items: state.items.filter((_, i) => {
            return index !== i;
        })
    };
};

export const updateItem = (state, { index, value }) => {

    return {
        ...state,
        items: state.items.map((item, i) => {
            if (index === i) {
                return {
                    ...item,
                    task: value,
                }
            }
        })
    };
};

export const completeItem = (state, { index }) => {

    return {
        ...state,
        items: state.items.map((item, i) => {
            if (index === i) {
                return {
                    ...item,
                    completed: true
                }
            }
        })
    };
};

export default (state, action) => {
    switch (action.type) {
        case "NEW_ITEM": return addItem();
        case "REMOVE_ITEM": return removeItem();
        case "CHANGE_ITEM": return updateItem();
        case "MARK_COMPLETED": return completeItem();

        default: return state;
    }
};