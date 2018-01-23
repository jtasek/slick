export default function hideCreateProjectDialog({ props, state }) {
    state.set(`dialogs.createProject.visible`, props.bookmark)
}
