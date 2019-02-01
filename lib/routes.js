const Router = require('koa-router');
const BASE_URI = process.env.BASE_URI || `/api/v1`;
const router = new Router({ prefix: BASE_URI });
// controllers
const root = require('./root.controller.js');

// root route
// METHOD GET
router.get('/', root.get);
// METHOD POST 
router.post('/', root.post);

// Adding routes

module.exports = router;
