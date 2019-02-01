/**
 * root.controller
 * Here you can define your functions and it will be exported to be used directly 
 * by the router.
 */

const get = async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!'
  };
};

const post = async (ctx) => {
  ctx.status = 201;
  ctx.body = {
    status: 'success',
    message: ctx.request.body
  };
};


module.exports = { get, post };
