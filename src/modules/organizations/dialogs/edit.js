import React from 'react'
import { connect } from '@cerebral/react'
import { form } from '@cerebral/forms'
import { state, props, signal } from 'cerebral/tags'
import Dialog from '../../../components/Dialog'
import Form from '../../../components/Form'
import Input from '../../../components/Input'

export default connect(
  {
    title: state`forms.project.title`,
    onChange: signal`fieldChanged`,
    onClose: signal`toggleDialog`,
    onSubmit: signal`projects.projectUpdated`
  },
  ({ title, path = 'forms.project.fields', onChange, onClose, onSubmit }) => (
    <Dialog title={title} onSubmit={onSubmit} onClose={onClose} path={path}>
      <Form path="forms.project.fields">
        <Input path="forms.project.fields.name" onChange={onChange} />
        <Input path="forms.project.fields.description" onChange={onChange} />
      </Form>
    </Dialog>
  )
)
