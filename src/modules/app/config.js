export default {
    currentPage: 'Projects',
    projectId: 1,
    filter: '',
    search: '',
    colors: {
        blue: '#33b6f8',
        grey: '#a4a4a7',
        green: '#0ecd0e',
        orange: '#ff9b23',
        purple: '#dc70e5',
        red: '#ff334b',
        yellow: '#f7d033'
    },
    searches: ['project', 'third'],
    notifications: [
        { type: 'info', title: 'Info', message: 'welcome to ...' },
        { type: 'warn', title: 'Warning', message: 'new warning...' },
        { type: 'success', title: 'Success', message: 'messaging system ...' },
        { type: 'error', title: 'Failure', message: 'oh yeah ...' }
    ],
    dialogs: ['CreateProject'],
    pages: [
        'Dashboard',
        'Projects',
        'Tasks',
        'Teams',
        // 'Work',
        'Users'
        // 'Events',
        // 'Timeline',
        // 'Timer',
        // 'Alerts',
        // 'Voice'
    ],
    isLoading: false,
    forms: {
        organization: {
            title: {
                label: 'Organization name:',
                value: '',
                defaultValue: 'Enter organization name...',
                isRequired: true,
                validationRules: ['minLength:3']
            },
            description: {
                label: 'Organization description:',
                value: '',
                defaultValue: 'Enter organization description...'
            }
        },
        project: {
            visible: false,
            title: 'Create New Project',
            showErrors: false,
            fields: {
                title: {
                    label: 'Project name:',
                    value: '',
                    defaultValue: 'Enter project name...',
                    isRequired: true,
                    validationRules: ['minLength:3']
                },
                description: {
                    label: 'Project description:',
                    value: '',
                    defaultValue: 'Enter project description...'
                }
            }
        },
        task: {
            title: {
                label: 'Task name:',
                value: '',
                defaultValue: 'Enter task name...',
                isRequired: true,
                validationRules: ['minLength:3']
            },
            description: {
                label: 'Task description:',
                value: '',
                defaultValue: 'Enter task description...'
            }
        },
        team: {
            title: {
                label: 'Team name:',
                value: '',
                defaultValue: 'Enter team name...',
                isRequired: true,
                validationRules: ['minLength:3']
            },
            description: {
                label: 'Team description:',
                value: '',
                defaultValue: 'Enter team description...'
            },
            members: {
                label: 'Team members:',
                value: '',
                defaultValue: 'Add member...'
            }
        },
        event: {
            title: {
                label: 'Event name:',
                value: '',
                defaultValue: 'Enter event name...',
                isRequired: true,
                validationRules: ['minLength:3']
            },
            description: {
                label: 'Event description:',
                value: '',
                defaultValue: 'Enter event description...'
            },
            date: {
                label: 'Occurres:',
                value: '8:00',
                defaultValue: Date.now()
            },
            isRecurring: false,
            schedule: [],
            from: Date.now(),
            to: Date.now() + 2,
            invites: [],
            owner: 'admin'
        },
        user: {
            username: {
                label: 'Username:',
                value: '',
                defaultValue: 'Enter username...',
                isRequired: true,
                validationRules: ['minLength:3']
            },
            firstName: {
                label: 'First name:',
                value: '',
                defaultValue: 'Enter first name...'
            },
            lastName: {
                label: 'Last name:',
                value: '',
                defaultValue: 'Enter last name...'
            },
            email: {
                label: 'Email',
                value: '',
                defaultValue: 'Enter email...',
                validationMessages: ['You must enter a valid email'],
                validationRules: ['isEmail'] // add unique validator
            },
            roles: {
                lable: 'Roles:',
                value: '',
                defaultValue: 'Add roles...'
            },
            showErrors: false
        }
    },
    components: {
        footer: {
            visible: true
        },
        header: {
            visible: true
        },
        menubar: {
            visible: true
        },
        navbar: {
            visible: true
        },
        dialogs: {
            visible: false
        },
        notifications: {
            visible: true
        },
        snackbar: {
            visible: true
        },
        sidebar: {
            visible: true
        },
        statusbar: {
            visible: true
        },
        workspace: {
            visible: true
        }
    }
}
