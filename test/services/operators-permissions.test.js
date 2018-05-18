const assert = require('assert');
const app = require('../../src/app');

describe('\'operators-permissions\' service', () => {
  it('registered the service', () => {
    const service = app.service('operators-permissions');

    assert.ok(service, 'Registered the service');
  });
});
