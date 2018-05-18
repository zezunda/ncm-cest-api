const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const clientsDisableOperators = require('../../src/hooks/clients-disable-operators');

describe('\'clientsDisableOperators\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: clientsDisableOperators()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
