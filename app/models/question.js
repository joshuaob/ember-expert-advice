import DS from 'ember-data'
import { computed } from '@ember/object'

export default DS.Model.extend({
    title: DS.attr('string', { defaultValue: 'What is the meaning of life?' }),
    description: DS.attr('string', {
        defaultValue:
            "The meaning of life, or the answer to the question: 'What is the meaning of life?', pertains to the significance of living or existence in general. Many other related questions include: 'Why are we here?', 'What is life all about?', or 'What is the purpose of existence?' There have been a large number of proposed answers to these questions from many different cultural and ideological backgrounds. The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history. Different people and cultures believe different things for the answer to this question.",
    }),
    tags: DS.attr('string', { defaultValue: 'meaning, life, age, human' }),
    tagArray: computed('tags', function() {
        return this.get('tags').split(',')
    }),
    slug: DS.attr('string'),
    views: DS.attr('number'),
    viewCounter: computed('views', function() {
        return (this.get('views') / 1000).toFixed(1) + 'k'
    }),
})
