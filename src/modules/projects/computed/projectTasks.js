import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'

export default Compute(
    state`projectId`,
    state`tasks`,
    (projectId, tasks) => {
        if (projectId && projectId > 0) {
            return tasks.filter(task => task.projectId === projectId)
        }
    }
)
