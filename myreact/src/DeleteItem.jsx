// How can you remove an item from a list stored 
// in state when a delete button is clicked?
import { useState } from 'react';

function DeleteItem() {
    const [items, setItems] = useState([
        {id: 1, name: 'item 1'},
        {id: 2, name: 'item 2'},
        {id: 3, name: 'item 3'}
    ]);

    const deleteItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div>
            <h1>List {items.length} Items</h1>
            {items.length === 0 && <p>No items to display</p> }
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}
                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DeleteItem;