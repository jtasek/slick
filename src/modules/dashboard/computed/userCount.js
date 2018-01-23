import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'

export default Compute(
    state`users`,
    (users) => {
        return Object.keys(users).length
    })