import Controller from '@ember/controller'

export default Controller.extend({
    actions: {
        deleteQuestion(question) {
            const _this = this
            question.destroyRecord().then(() => {
                _this.transitionToRoute('index')
            })
        },
    },
})
