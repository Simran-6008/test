import { setupTest } from 'home/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | trackcard', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('trackcard', {});
    assert.ok(model, 'model exists');
  });
});
