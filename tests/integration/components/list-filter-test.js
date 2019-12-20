import { module, skip } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | list-filter', function(hooks) {
    setupRenderingTest(hooks)

    skip('it renders', async function(assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`{{list-filter}}`)

        assert.equal(this.element.textContent.trim(), '')

        // Template block usage:
        await render(hbs`
          {{#list-filter}}
            template block text
          {{/list-filter}}
        `)

        assert.equal(this.element.textContent.trim(), 'template block text')
    })
})
