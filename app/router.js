/**
 * @param {Egg.Application} app - egg application
 */
// module.exports = app => {
//   const { router, controller } = app;
//   router.get('/', controller.home.index);
//   router.get('/list', controller.home.list);  // index指某个方法
// };

module.exports = app => {
     require('./router/default')(app)
};
