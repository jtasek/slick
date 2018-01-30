import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'

export default Compute(state`forms`, dialogs => {
  var result = Object.keys(dialogs)
    .map(key => dialogs[key])
    .filter(dialog => dialog.visible)

  console.dir(result)
  return result
})
