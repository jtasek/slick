import React from 'react'
import { connect } from '@cerebral/react'
import { form } from '@cerebral/forms'
import { state, props, signal } from 'cerebral/tags'
import Dialog from '../../../components/Dialog'

export default connect(
  {
    form: form(state`forms.project.fields`),
    title: state`forms.project.title`,
    onChange: signal`projects.fieldChanged`,
    onClose: signal`toggleDialog`,
    onSubmit: signal`projects.projectCreated`
  },
  ({ form, title, path = 'forms.project', onChange, onClose, onSubmit }) => (
    <Dialog title={title} onSubmit={onSubmit} onClose={onClose} path={path}>
      <form
        onSubmit={event => {
          onSubmit()
        }}
      >
        <label forhtml="name" style={{ display: 'block' }}>
          {form.name.label}
        </label>
        <input
          name="name"
          type="text"
          title={form.name.label}
          placeholder={form.name.defaultValue}
          onChange={event =>
            onChange({
              name: event.target.name,
              value: event.target.value
            })
          }
        />
        <br />
        <label forhtml="escription" style={{ display: 'block' }}>
          {form.description.label}
        </label>
        <input
          name="description"
          type="text"
          title={form.description.label}
          placeholder={form.description.defaultValue}
          onChange={event =>
            onChange({
              name: event.target.name,
              value: event.target.value
            })
          }
        />
      </form>
    </Dialog>
  )
)
