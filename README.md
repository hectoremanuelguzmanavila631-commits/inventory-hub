# InventoryHub - Sistema de Gestión de Inventario Full-Stack

InventoryHub es una aplicación robusta diseñada para la gestión de productos, integrando un front-end dinámico con un back-end escalable. Este proyecto fue desarrollado utilizando **Microsoft Copilot** como compañero de codificación para optimizar la comunicación, depuración y estructuración de datos.

## 🚀 Tecnologías Utilizadas
* **Front-end:** React.js (Hooks, Fetch API)
* **Back-end:** Node.js, Express.js
* **Base de Datos:** MongoDB
* **IA de Apoyo:** Microsoft Copilot (GPT-4)

## 📁 Arquitectura del Sistema
El proyecto sigue una arquitectura cliente-servidor para garantizar una separación de responsabilidades clara.



---

## 💡 Resumen Reflexivo: El impacto de Microsoft Copilot

Para cumplir con los requisitos del proyecto, a continuación detallo cómo utilicé Copilot en cada fase:

### 1. Generación y Perfeccionamiento de Código
Utilicé Copilot para generar la estructura inicial del servidor Express. Copilot no solo escribió el código base, sino que perfeccionó los controladores de rutas para manejar errores de manera asíncrona (`try-catch`), asegurando que la comunicación front-end y back-end fuera estable desde el inicio.

### 2. Depuración y Resolución de Problemas
Durante la integración, enfrenté un problema con el intercambio de recursos de origen cruzado (**CORS**) que impedía que React consumiera la API. Copilot identificó el error en los logs de la consola y me sugirió la instalación y configuración del paquete `cors` en el servidor, resolviéndolo en segundos.

### 3. Implementación de Estructuras JSON
Diseñé el esquema de datos para los productos de inventario. Copilot me ayudó a definir una estructura JSON clara en el modelo de Mongoose, asegurando que los tipos de datos (Strings, Numbers, Dates) fueran coherentes para facilitar la manipulación de la API.

### 4. Optimización del Rendimiento
Para optimizar la comunicación, Copilot sugirió dos mejoras clave:
* **Filtrado de datos:** Uso de `.select()` en las consultas de MongoDB para enviar solo los campos necesarios, reduciendo el ancho de banda.
* **Headers de Cache:** Implementación de cabeceras básicas para mejorar la velocidad de respuesta en peticiones repetitivas.

---

## 🛠️ Instalación y Configuración

### Requisitos previos
* Node.js instalado
* Instancia de MongoDB (Local o Atlas)

### Pasos para ejecutar:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/inventory-hub.git](https://github.com/tu-usuario/inventory-hub.git)
