import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'
import { searchAndFilter } from '../../app/operators'

export default Compute(
  state`search`,
  state`filter`,
  state`organizations`,
  (search, filter, organizations) => {
    return searchAndFilter(organizations, 'organizations', filter, search)
  }
)
