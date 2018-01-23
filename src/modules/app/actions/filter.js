export default function filter({ props, state }) {
    console.log(`filtering: ${props.value}`)
    state.set('filter', props.value)
}
