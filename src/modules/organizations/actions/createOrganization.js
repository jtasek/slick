export default function createProject({ forms, props, state, path }) {
  console.log('Create organization')
  const newid = Object.keys(state.get('organizations')).length + 1
  const form = forms.get('forms.organization.fields')

  state.set(`organizations.${newid}`, {
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
