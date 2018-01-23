export default function search({ props, state }) {
    console.log('saving search...')
    const search = state.get('search')
    if (search) {
        state.push('searches', search)
    }
}
