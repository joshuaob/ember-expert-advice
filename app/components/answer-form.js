import Component from '@ember/component'

export default Component.extend({
    actions: {
        submitForm() {
            this.get('submitForm')(this.get('post'))
        },
    },
})
