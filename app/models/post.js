import DS from 'ember-data'

export default DS.Model.extend({
    description: DS.attr('string', {
        defaultValue: 'The meaning of life is 42',
    }),
    questionSlug: DS.attr('string'),
})
