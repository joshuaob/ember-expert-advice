import Controller from '@ember/controller'
import { computed } from '@ember/object'

export default Controller.extend({
    page: 1,
    perPage: 5,
    titleFilter: null,
    tagFilter: null,
    pageParams: computed('page', 'perPage', function() {
        const params = {}

        if (this.page) {
            params['page'] = this.page
        }

        if (this.perPage) {
            params['perPage'] = this.perPage
        }
        return params
    }),
    filterParams: computed('titleFilter', 'tagFilter', function() {
        const params = {}

        if (this.titleFilter) {
            params['title'] = this.titleFilter
        }

        if (this.tagFilter) {
            params['tag'] = this.tagFilter
        }
        return params
    }),
    loadQuestions() {
        const pageParams = this.pageParams
        const filterParams = this.filterParams
        const params = Object.assign(pageParams, filterParams)
        return this.store.query('question', params)
    },
    actions: {
        clearTags() {
            this.set('tagFilter', null)
            return this.store.query('question', {
                page: this.page,
                perPage: this.perPage,
            })
        },
        filterByTitle(title) {
            this.set('titleFilter', title)
            return this.loadQuestions()
        },
        filterByTag(tag) {
            this.set('tagFilter', tag)
            return this.loadQuestions()
        },
        nextPage(filterParams, pageParams) {
            const params = Object.assign(pageParams, filterParams)
            return this.store.query('question', params)
        },
        previousPage(filterParams, pageParams) {
            const params = Object.assign(pageParams, filterParams)
            return this.store.query('question', params)
        },
    },
})
