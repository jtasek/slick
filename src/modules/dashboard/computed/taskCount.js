import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'

export default Compute(
    state`tasks`,
    (tasks) => {
        return Object.keys(tasks).length
    })