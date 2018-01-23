import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'
import { searchAndFilter } from '../../app/operators'

export default Compute(
    state`search`,
    state`filter`,
    state`teams`,
    (search, filter, teams) => {
        return searchAndFilter(teams, 'teams', filter, search)
    }
)
