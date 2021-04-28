const express = require('express');

const app = express();

app.use(express.json())

/* 
Métodos

GET, POST, PUT, PATCH, DELETE

Tipos de parâmetros

Route Params => Identificar um recurso editar/deletar/buscar
Query Params => Paginação/Filtro
Body Params => Objetos para inserção ou edição (JSON)

*/

app.get("/courses", (request, response) => {
    return response.json([
        "curso 1",
        "curso 2"
    ])
})

app.post("/courses", (request, response) => {
    return response.json([
        "curso 1",
        "curso 3",
        "curso 2"
    ])
})

app.put("/courses/:id", (request, response) => {
    return response.json([
        "curso 1",
        "curso 6",
        "curso 8"
    ])
})

app.patch("/courses/:id", (request, response) => {
    return response.json([
        "curso 1",
        "curso 6",
        "curso 5"
    ])
})

app.delete("/courses/:id", (request, response) => {
    return response.json([
        "curso 1",
        "curso 7"
    ])
})

app.listen(3333);