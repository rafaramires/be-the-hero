const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// Rota e Recursos

// Metodos HTTP:

// GET: Buscar uma informação no Back-end
// POST: Criar uma informação no Back-end
// PUT: Alterar uma informação no Back-end
// DELETE: Deletar uma informação no Back-end

/**
 * Tipo de Parâmetros:
 * 
 * Query: Parametros nomeados enviados na rota após ("?") (Filtros, Paginação)
 * Route Parms: Parametros ultilizados para identificar recursos
 * Request Body: Corpo da requisição, ultilizando para criar ou alterar recursos
 */

/**
 * Driver: select * from users
 * Query builder: table('users').select('*').where()
 */

