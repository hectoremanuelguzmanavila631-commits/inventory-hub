const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Item = require('./models/Item');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a DB (Optimización: Uso de variables de entorno)
mongoose.connect('mongodb://localhost:27017/inventoryHub')
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.error("Error de conexión:", err));

// GET: Obtener inventario (Optimización: Selección de campos específicos)
app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find().select('name quantity category'); 
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener datos", error });
    }
});

// POST: Agregar item (Estructura JSON clara)
app.post('/api/items', async (req, res) => {
    const newItem = new Item(req.body);
    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: "Error al guardar item" });
    }
});

app.listen(5000, () => console.log("Servidor corriendo en puerto 5000"));
