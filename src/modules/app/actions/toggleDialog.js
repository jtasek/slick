export default function({ props, state }) {
  console.log(props.path)
  state.toggle(`${props.path}.visible`)
}
