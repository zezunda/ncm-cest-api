const assert = require('assert');
const app = require('../../src/app');

describe('\'invoices\' service', () => {
  it('registered the service', () => {
    const service = app.service('invoices');

    assert.ok(service, 'Registered the service');
  });
});
