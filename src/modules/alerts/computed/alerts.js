import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'
import { searchAndFilter } from '../../app/operators'

export default Compute(
    state`search`,
    state`filter`,
    state`alerts`,
    (search, filter, alerts) => {
        return searchAndFilter(alerts, 'alerts', filter, search)
    }
)
