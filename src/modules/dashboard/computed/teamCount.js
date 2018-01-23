import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'

export default Compute(
    state`teams`,
    (teams) => {
        return Object.keys(teams).length
    })