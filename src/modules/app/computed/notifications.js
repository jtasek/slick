import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'
//import fuse from 'cerebral-computed-fuse'

export default Compute(state`notifications`, notifications => {
  return Object.keys(notifications).map(id => ({
    id,
    path: `notifications.${id}`
  }))
})
