import React from 'react'
import { connect } from '@cerebral/react'
import { form } from '@cerebral/forms'
import { state, props, signal } from 'cerebral/tags'
import Dialog from '../../../components/Dialog'
import Form from '../../../components/Form'
import Input from '../../../components/Input'

export default connect(
  {
    title: state`forms.event.title`,
    onChange: signal`fieldChanged`,
    onClose: signal`toggleDialog`,
    onSubmit: signal`events.eventDeleted`
  },
  ({ title, path = 'forms.event.fields', onChange, onClose, onSubmit }) => (
    <Dialog title={title} onSubmit={onSubmit} onClose={onClose} path={path}>
      <Form path="forms.event.fields">
        <Input path="forms.event.fields.name" onChange={onChange} />
      </Form>
    </Dialog>
  )
)
