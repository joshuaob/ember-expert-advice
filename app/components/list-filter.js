import Component from '@ember/component'

export default Component.extend({
    nextLink: null,
    prevLink: null,
    value: '',
    didInsertElement() {
        this.filter('').then(results => {
            this.set('nextLink', results.links.next)
            this.set('prevLink', results.links.prev)
            this.set('results', results)
        })
    },
    actions: {
        handleFilterEntry() {
            let filterInputValue = this.value
            let filterAction = this.filter

            if (filterInputValue) {
                filterAction(filterInputValue).then(filterResults => {
                    this.set('nextLink', filterResults.links.next)
                    this.set('prevLink', filterResults.links.prev)
                    this.set('results', filterResults)
                })
            } else {
                this.set('tagFilter', null)
                this.get('clearTags')().then(filterResults => {
                    this.set('nextLink', filterResults.links.next)
                    this.set('prevLink', filterResults.links.prev)
                    this.set('results', filterResults)
                })
            }
        },
        handleTagFilter(tag) {
            this.set('tagFilter', tag)
            let filterAction = this.filterByTag
            filterAction(this.tagFilter).then(filterResults => {
                this.set('nextLink', filterResults.links.next)
                this.set('prevLink', filterResults.links.prev)
                this.set('results', filterResults)
            })
        },
        clearTags() {
            this.set('value', '')
            this.set('tagFilter', null)
            this.get('clearTags')().then(filterResults => {
                this.set('nextLink', filterResults.links.next)
                this.set('prevLink', filterResults.links.prev)
                this.set('results', filterResults)
            })
        },
        nextPage() {
            const url = new URL(decodeURI(this.nextLink))
            const nextPageAction = this.nextPage
            const filterParams = {}

            if (this.value) {
                filterParams['title'] = this.value
            }

            if (this.tagFilter) {
                filterParams['tag'] = this.tagFilter
            }

            let pageParams = {
                page: url.searchParams.get('page[number]'),
                perPage: url.searchParams.get('perPage'),
            }

            nextPageAction(filterParams, pageParams).then(filterResults => {
                this.set('nextLink', filterResults.links.next)
                this.set('prevLink', filterResults.links.prev)
                this.set('results', filterResults)
            })
        },
        previousPage() {
            const url = new URL(decodeURI(this.prevLink))
            const prevPageAction = this.previousPage
            const filterParams = {}

            if (this.value) {
                filterParams['title'] = this.value
            }

            if (this.tagFilter) {
                filterParams['tag'] = this.tagFilter
            }

            let pageParams = {
                page: url.searchParams.get('page[number]'),
                perPage: url.searchParams.get('perPage'),
            }

            prevPageAction(filterParams, pageParams).then(filterResults => {
                this.set('nextLink', filterResults.links.next)
                this.set('prevLink', filterResults.links.prev)
                this.set('results', filterResults)
            })
        },
    },
})
