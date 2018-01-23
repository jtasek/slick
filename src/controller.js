// @flow
import { Controller } from 'cerebral'
// system modules
import Devtools from 'cerebral/devtools'
// application modules
import app from './modules/app'

export default Controller(app, {
    devtools:
        process.env.NODE_ENV === 'production'
            ? null
            : Devtools({
                  host: 'localhost:8484',
                  reconnect: false
              })
})
