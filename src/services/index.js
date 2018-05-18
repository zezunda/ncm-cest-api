const operators = require('./operators/operators.service.js');
const clients = require('./clients/clients.service.js');
const importations = require('./importations/importations.service.js');
const invoices = require('./invoices/invoices.service.js');
const products = require('./products/products.service.js');
const cest = require('./cest/cest.service.js');
const searcher = require('./searcher/searcher.service.js');
const events = require('./events/events.service.js');
const uploads = require('./uploads/uploads.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(operators);
  app.configure(clients);
  app.configure(importations);
  app.configure(invoices);
  app.configure(products);
  app.configure(cest);
  app.configure(searcher);
  app.configure(events);
  app.configure(uploads);
};
