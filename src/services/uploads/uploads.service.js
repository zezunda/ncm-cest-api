const hooks = require('./uploads.hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./uploads');
const multer = require('multer');
const multipartMiddleware = multer();

module.exports = function (app) {
  app.use('/uploads',
    multipartMiddleware.single('uri'),
    function (req, res, next) {
      req.feathers.file = req.file;
      next();
    },
    blobService({ Model: blobStorage })
  );
  const service = app.service('uploads');
  service.hooks(hooks);
};
