export default function createProject({ forms, props, state, path }) {
    const newid = state.get('projects').length + 1
    const form = forms.get('forms.project')

    state.set('projects', {
        id: newid,
        bookmark: false,
        favorite: false,
        title: form.name.value,
        description: form.description.value
    })
}
