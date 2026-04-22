import { module, test } from 'qunit';
import { setupTest } from 'home/tests/helpers';

module('Unit | Route | charts', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:charts');
    assert.ok(route);
  });
});
