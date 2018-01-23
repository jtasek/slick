export default function openProject({ props, state }) {
    console.log(`project id: ${props.id}`)
    state.set('projectId', props.id)
    state.set('currentPage', 'Project')
}
