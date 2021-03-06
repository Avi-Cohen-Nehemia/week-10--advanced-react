import reducer, {
    addItem,
    removeItem,
    updateItem,
    completeItem
} from './reducer';

const initialState = {
    items: []
};

it('adds items', () => {
    let result = addItem(initialState, { value: "Hello" });

    // 1st test: first item in the items array should be a new task with "Hello"
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });

    // 2nd test: shouldn't be the same array we started with
    expect(result.items).not.toBe(initialState.items);

    // 3rd test: passing in the previous result, which already had one item
    result = addItem(result, { value: "Mum" });
    // should be two items
    expect(result.items.length).toBe(2);

    // 4th test: check both items are now in items, in order given
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });
    expect(result.items[1]).toEqual({ task: "Mum", completed: false });
});

it('removes items', () => {
    // start with a few items
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
            { task: "How", completed: false },
            { task: "Are", completed: true },
            { task: "You", completed: false },
            { task: "Today", completed: false },
        ]
    };

    // 1st test: if we start with an array of items and remove the item with an index of 0,
    // then the first item in the returned array should be the "Mum" task
    // remove item at index 0
    let removed = removeItem(many, { index: 0 });
    // "Hello" should be gone, so should get back "Mum" task
    expect(removed.items[0]).toEqual({ task: "Mum", completed: false });

    // 2nd test: Make sure we're not getting the original array back.
    // check that it's not the same object being returned
    expect(removed.items).not.toBe(many.items);

    // 3rd test: Make sure we're getting five items back
    // should be 5 items, not 6
    expect(removed.items.length).toBe(5);

    // 4th test: Remove another item and make sure it still works:
    // use the previously pruned array
    removed = removeItem(removed, { index: 2 });

    // check that the right task is now in index 2
    expect(removed.items[2]).toEqual({ task: "You", completed: false });
});

it('updates items', () => {

    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
        ]
    };
    
    // 1st test: If we update an item its task property should change.
    // update an item passing the index and value
    let updated = updateItem(many, { index: 1, value: "Dad" });
    // should have updated the task property
    expect(updated.items[1]).toEqual({ task: "Dad", completed: false });

    // 2nd test: check that it's not the same object being returned
    expect(updated.items[1]).not.toBe(many.items[1]);

    // 3rd test: Make sure the completed property isn't changed
    // update the item at index 0
    updated = updateItem(many, { index: 0, value: "Good Morning" });
    // check that the completed value is the same
    expect(updated.items[0]).toEqual({ task: "Good Morning", completed: true });
});

it('completes items', () => {
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
        ]
    };
    
    // 1st test: complete the item at index 1
    let completed = completeItem(many, { index: 1 });
    // expected completed to be true
    expect(completed.items[1]).toEqual({ task: "Mum", completed: true });

    // 2nd test: check that it's not the same object being returned
    expect(completed.items[1]).not.toBe(many.items[1]);

    // 3rd test: complete item at index 0
    completed = completeItem(many, { index: 0 });
    // should still be marked as completed
    expect(completed.items[0]).toEqual({ task: "Hello", completed: true });
});

it('reduces', () => {
    // 1st test: pass in a nonsense action
    let newState = reducer(initialState, { type: "GOTTA_CATCH_EM_ALL" });
    // get back initial state
    expect(newState).toBe(initialState);


    // 2nd test: use the NEW_ITEM action, passing a value
    newState = reducer(initialState, { type: "NEW_ITEM", value: "Hello" });
    // make sure it's been added
    expect(newState.items[0]).toEqual({ task: "Hello", completed: false });


    // 3rd test: add some more items
    newState = reducer(newState, { type: "NEW_ITEM", value: "Mum" });
    newState = reducer(newState, { type: "NEW_ITEM", value: "How" });
    newState = reducer(newState, { type: "NEW_ITEM", value: "Are" });
    newState = reducer(newState, { type: "NEW_ITEM", value: "You" });
    // check they've been added
    expect(newState.items.length).toBe(5);
    // remove item at index 2
    newState = reducer(newState, { type: "REMOVE_ITEM", index: 2 });
    // check index 3 has moved down to index 2
    expect(newState.items[2]).toEqual({ task: "Are", completed: false });

    
    // 4th test: update item at index 1
    newState = reducer(newState, { type: "CHANGE_ITEM", index: 1, value: "Dad" });
    // check it's been changed
    expect(newState.items[1]).toEqual({ task: "Dad", completed: false });

    
    // 5th test: mark index 1 as completed
    newState = reducer(newState, { type: "MARK_COMPLETED", index: 1 });
    // check it's been updated
    expect(newState.items[1]).toEqual({ task: "Dad", completed: true });
});