import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'
import { searchAndFilter } from '../../app/operators'

export default Compute(
    state`search`,
    state`filter`,
    state`events`,
    (search, filter, events) => {
        return searchAndFilter(events, 'events', filter, search)
    }
)
