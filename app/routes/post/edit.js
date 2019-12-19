import Route from '@ember/routing/route'
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'

export default Route.extend(AuthenticatedRouteMixin, {
    model(params, transition) {
        return this.get('store').findRecord(
            'question',
            transition.params.post.post_slug
        )
    },
})
