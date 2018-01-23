export default [
    {
        path: '/',
        signal: 'home'
    },
    {
        path: '/dashboard',
        signal: 'dashboard.routed'
    },
    {
        path: '/projects',
        signal: 'projects.routed'
    },
    {
        path: '/projects/new',
        signal: 'projects.newed'
    },
    {
        path: '/projects/:id',
        signal: 'projects.opened'
    },
    {
        path: '/users',
        signal: 'users.routed'
    },
    {
        path: '/users/:id',
        signal: 'users.userRouted'
    },
    {
        path: '/tasks',
        signal: 'tasks.routed'
    },
    {
        path: '/tasks/:id',
        signal: 'tasks.taskRouted'
    },
    {
        path: '/teams',
        signal: 'teams.routed'
    },
    {
        path: '/teams/:id',
        signal: 'teams.teamRouted'
    },
    {
        path: '/*',
        signal: 'invalidRouted'
    }
]
