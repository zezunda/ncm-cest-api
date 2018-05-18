const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const cestSearch = require('../../src/hooks/cest-search');

describe('\'cest-search\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: cestSearch()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
