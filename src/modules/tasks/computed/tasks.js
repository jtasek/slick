import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'
import { searchAndFilter } from '../../app/operators'

export default Compute(
    state`search`,
    state`filter`,
    state`tasks`,
    (search, filter, tasks) => {
        return searchAndFilter(tasks, 'tasks', filter, search)
    }
)
