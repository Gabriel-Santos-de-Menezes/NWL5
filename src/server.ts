import express from 'express';
import './database';
import { routes } from './routes';

const app = express();

app.use(express.json());//Habilita json

app.use(routes);

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