export default function createTask({ forms, props, state, path }) {
    const newid = state.get('tasks').length + 1
    const form = forms.get('forms.task')

    state.set('tasks', {
        id: newid,
        bookmark: false,
        favorite: false,
        title: form.name.value,
        description: form.description.value
    })
}
