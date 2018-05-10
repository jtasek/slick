export default {
  currentPage: 'Projects',
  projectId: 1,
  filter: '',
  search: '',
  searching: false,
  searches: ['project', 'third'],
  colors: {
    blue: '#33b6f8',
    grey: '#a4a4a7',
    green: '#0ecd0e',
    orange: '#ff9b23',
    purple: '#dc70e5',
    red: '#ff334b',
    yellow: '#f7d033'
  },
  notifications: [
    { time: 123, type: 'info', title: 'Info', message: 'welcome to ...' },
    {
      time: 124,
      type: 'warn',
      title: 'Warning',
      message: 'new warning...'
    },
    {
      time: 125,
      type: 'success',
      title: 'Success',
      message: 'messaging system ...'
    },
    { time: 126, type: 'error', title: 'Failure', message: 'oh yeah ...' }
  ],
  pages: [
    'Dashboard',
    'Organizations',
    'Projects',
    'Tasks',
    'Teams',
    'Work',
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
      visible: false,
      name: 'OrganizationCreate',
      title: 'Create Organization',
      showErrors: false,
      fields: {
        name: {
          label: 'Name',
          value: '',
          defaultValue: 'Enter organization name...',
          isRequired: true,
          validationRules: ['minLength:3']
        },
        description: {
          label: 'Description',
          value: '',
          defaultValue: 'Enter organization description...'
        }
      }
    },
    project: {
      visible: false,
      name: 'ProjectCreate',
      title: 'Create Project',
      showErrors: false,
      fields: {
        name: {
          label: 'Name',
          value: '',
          defaultValue: 'Enter project name...',
          isRequired: true,
          validationRules: ['minLength:3']
        },
        description: {
          label: 'Description',
          value: '',
          defaultValue: 'Enter project description...'
        }
      }
    },
    task: {
      visible: false,
      name: 'TaskCreate',
      title: 'Create Task',
      showErrors: false,
      fields: {
        name: {
          label: 'Name:',
          value: '',
          defaultValue: 'Enter task name...',
          isRequired: true,
          validationRules: ['minLength:3']
        },
        description: {
          label: 'Description:',
          value: '',
          defaultValue: 'Enter task description...'
        }
      }
    },
    team: {
      visible: false,
      name: 'TeamCreate',
      title: 'Create Team',
      showErrors: false,
      fields: {
        name: {
          label: 'Name:',
          value: '',
          defaultValue: 'Enter team name...',
          isRequired: true,
          validationRules: ['minLength:3']
        },
        description: {
          label: 'Description:',
          value: '',
          defaultValue: 'Enter team description...'
        },
        members: {
          label: 'Members:',
          value: '',
          defaultValue: 'Add member...'
        }
      }
    },
    event: {
      visible: false,
      name: 'EventCreate',
      title: 'Create Event',
      showErrors: false,
      fields: {
        name: {
          label: 'Name:',
          value: '',
          defaultValue: 'Enter event name...',
          isRequired: true,
          validationRules: ['minLength:3']
        },
        description: {
          label: 'Description:',
          value: '',
          defaultValue: 'Enter event description...'
        },
        date: {
          label: 'Occurres:',
          value: '8:00',
          defaultValue: Date.now()
        },
        isRecurring: {
          label: 'Recurring:',
          value: false,
          defaultValue: false
        },
        schedule: {
          label: 'Schedule:',
          value: '',
          defaultValue: ''
        },
        from: {
          label: 'From:',
          value: Date.now(),
          defaultValue: ''
        },
        to: {
          label: 'To:',
          value: Date.now() + 2,
          defaultValue: ''
        },
        owner: {
          label: 'Owner:',
          value: 'user',
          defaultValue: ''
        }
      }
    },
    user: {
      visible: false,
      name: 'UserCreate',
      title: 'Create User',
      showErrors: false,
      fields: {
        username: {
          label: 'Name:',
          value: '',
          defaultValue: 'Enter user name...',
          isRequired: true,
          validationRules: ['minLength:3']
        },
        firstname: {
          label: 'First name:',
          value: '',
          defaultValue: 'Enter first name...'
        },
        lastname: {
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
        }
      }
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
