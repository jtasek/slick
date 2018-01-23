import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'

export default Compute(
    state`projectId`,
    state`projects`,
    (projectId, projects) => {
        return projects[projectId]
    }
)
