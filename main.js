import { Cursor } from "./scripts/cursor.js";
import { TransformScripts } from "./scripts/transformScripts.js";
const body = document.querySelector('body')
fetch('pages/app.html')
    .then(response => response.text()) // Convertir la respuesta a texto
    .then(html => {
        body.innerHTML = html; // Insertar el contenido HTML en el body
    })
    .catch(error => {
        console.error('Error al cargar el archivo HTML:', error);
    });