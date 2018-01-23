export default function search({ props, state }) {
    console.log(`searching: ${props.value}`)
    state.set('search', props.value)
}
