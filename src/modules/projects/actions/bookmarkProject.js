export default function bookmarkProject({ props, state }) {
	state.set(`projects.${props.id}`, props.bookmark)
}