export default function({ props, state }) {
  state.toggle(`${props.path}.visible`)
}
