export default function({ props, state }) {
  state.toggle(`notifications.${props.id}.visible`)
}
