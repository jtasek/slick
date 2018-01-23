export default function filter({ props, state }) {
    console.log('resetting filter...')
    state.set('filter', '')
}
