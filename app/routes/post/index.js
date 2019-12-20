import Route from '@ember/routing/route'
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'
import RSVP from 'rsvp'

export default Route.extend(AuthenticatedRouteMixin, {
    model(params, transition) {
        return RSVP.hash({
            question: this.get('store').findRecord(
                'question',
                transition.params.post.post_slug
            ),
            post: this.store.createRecord('post', {
                questionSlug: transition.params.post.post_slug,
            }),
            posts: this.store.query('post', {
                'question-slug': transition.params.post.post_slug,
            }),
        })
    },
})
