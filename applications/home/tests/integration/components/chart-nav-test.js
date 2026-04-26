import { module, test } from 'qunit';
import { setupRenderingTest } from 'home/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | chart-nav', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ChartNav />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ChartNav>
        template block text
      </ChartNav>
    `);

    assert.dom().hasText('template block text');
  });
});
