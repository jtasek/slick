import React from 'react'
import { connect } from '@cerebral/react'
import { form } from '@cerebral/forms'
import { state, props, signal } from 'cerebral/tags'
import Dialog from '../../../components/Dialog'
import Form from '../../../components/Form'
import Input from '../../../components/Input'

export default connect(
  {
    title: state`forms.team.title`,
    onChange: signal`fieldChanged`,
    onClose: signal`toggleDialog`,
    onSubmit: signal`teams.teamCreated`
  },
  ({ title, path = 'forms.team', onChange, onClose, onSubmit }) => (
    <Dialog title={title} onSubmit={onSubmit} onClose={onClose} path={path}>
      <Form path="forms.team.fields">
        <Input path="forms.team.fields.name" onChange={onChange} />
        <Input path="forms.team.fields.description" onChange={onChange} />
      </Form>
    </Dialog>
  )
)
