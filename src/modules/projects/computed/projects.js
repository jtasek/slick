import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'
import { searchAndFilter } from '../../app/operators'

export default Compute(
    state`search`,
    state`filter`,
    state`projects`,
    (search, filter, projects) => {
        return searchAndFilter(projects, 'projects', filter, search)
    }
)
