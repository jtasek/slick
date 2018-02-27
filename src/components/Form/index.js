import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import { form } from '@cerebral/forms'

export default connect(
  {
    form: form(state`forms.project.fields`)
  },
  ({ path, children }) => (
    <form
      onSubmit={e => {
        onSubmit({ path })
      }}
    >
      {children}
    </form>
  )
)
