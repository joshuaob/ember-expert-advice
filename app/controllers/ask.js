import Controller from '@ember/controller'

export default Controller.extend({
    actions: {
        submitQuestionForm(question) {
            const _this = this
            question.save().then(() => {
                _this.transitionToRoute('index')
            })
        },
    },
})
