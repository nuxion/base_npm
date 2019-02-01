const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');

// middlewares
app.use(bodyParser());

// routes
const indexRoutes = require('./routes');

// adding
app.use(indexRoutes.routes());

const server = app.listen(3000, ()=> {
  console.log(`Server listening on port: 3000`);
		});

module.exports = server;
