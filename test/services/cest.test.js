const assert = require('assert');
const app = require('../../src/app');

describe('\'cest\' service', () => {
  it('registered the service', () => {
    const service = app.service('cest');

    assert.ok(service, 'Registered the service');
  });
});
