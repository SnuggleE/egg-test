/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/version', controller.home.version);
  router.get('/version1', controller.home.releaseVersion);
};
