import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'

export default Compute(state`forms`, dialogs => {
    return Object.keys(dialogs).filter(dialog => dialog.visible)
})
