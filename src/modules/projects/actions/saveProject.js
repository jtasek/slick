export default function saveProject({ props, state }) {
    const result = confirm('Do you want to save the current project?')

    console.log(`Saving project: ${result}`)
}
