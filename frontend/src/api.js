const API_URL = 'http://localhost:5000/api/items';

export const fetchInventory = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Fallo en la red');
    return response.json();
};

export const addItem = async (item) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
    });
    return response.json();
};
