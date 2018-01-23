export default function({ props, state }) {
    state.toggle(`app.forms.${props.key}.visible`)
}
