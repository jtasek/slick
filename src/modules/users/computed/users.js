import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'
import { searchAndFilter } from '../../app/operators'

export default Compute(
    state`search`,
    state`filter`,
    state`users`,
    (search, filter, users) => {
        return searchAndFilter(users, 'users', filter, search)
    }
)
