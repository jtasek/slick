import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'

export default Compute(
    state`projects`,
    (projects) => {
        return Object.keys(projects).length
    })