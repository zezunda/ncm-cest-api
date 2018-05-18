const assert = require('assert');
const app = require('../../src/app');

describe('\'importations\' service', () => {
  it('registered the service', () => {
    const service = app.service('importations');

    assert.ok(service, 'Registered the service');
  });
});
