import express from 'express';

const app = express();

/* 
* Tipos de rotas
    * GET
    * POST
    * DELETE
    * PUT -> Alterar
    * PATCH -> Alterar uma informação específica
 */

app.get("/", (request, response) => {
  return response.json({
    message: "Hello NWL 05"
  });
});

app.post("/users", (request, response) => {
  return response.json({
    message: "User created successful"
  })
})

app.listen('3333', () => console.log("Server is running on port 3333"));