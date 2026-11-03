const test = require('node:test');
const assert = require('node:assert');

test('Application should return success message', async () => {
    const server = require('../src/app');

    await new Promise(resolve => server.listen(0, resolve));

    const response = await fetch(`http://localhost:${server.address().port}`);

    assert.strictEqual(response.status, 200);

    const data = await response.text();

    assert.match(data, /CI\/CD Pipeline/);

    await new Promise(resolve => server.close(resolve));
});
