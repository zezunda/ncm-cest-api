const assert = require('assert');
const app = require('../../src/app');

describe('\'searcher\' service', () => {
  it('registered the service', () => {
    const service = app.service('searcher');

    assert.ok(service, 'Registered the service');
  });
});
