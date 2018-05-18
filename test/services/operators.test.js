const assert = require('assert');
const app = require('../../src/app');

describe('\'operators\' service', () => {
  it('registered the service', () => {
    const service = app.service('operators');

    assert.ok(service, 'Registered the service');
  });
});
