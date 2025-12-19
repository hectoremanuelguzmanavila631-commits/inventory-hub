import React, { useState, useEffect } from 'react';
import { fetchInventory, addItem } from './api';

function App() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        fetchInventory().then(setItems).catch(console.error);
    }, []);

    const handleAdd = async () => {
        const newItem = { name, quantity: 1 };
        const savedItem = await addItem(newItem);
        setItems([...items, savedItem]);
        setName('');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>InventoryHub</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre del producto" />
            <button onClick={handleAdd}>Agregar</button>
            <ul>
                {items.map(item => <li key={item._id}>{item.name} - Cantidad: {item.quantity}</li>)}
            </ul>
        </div>
    );
}

export default App;
