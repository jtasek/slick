export default function createProject({ forms, props, state, path }) {
  const newid = Object.keys(state.get('projects')).length + 1
  const form = forms.get('forms.project.fields')

  state.set(`projects.${newid}`, {
    bookmark: false,
    description: form.description.value,
    favorite: false,
    id: newid,
    index: newid,
    lists: [],
    tags: [],
    title: form.name.value
  })
}
