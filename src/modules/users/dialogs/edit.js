import React from 'react'
import { connect } from '@cerebral/react'
import { form } from '@cerebral/forms'
import { state, props, signal } from 'cerebral/tags'
import Dialog from '../../../components/Dialog'
import Form from '../../../components/Form'
import Input from '../../../components/Input'

export default connect(
  {
    title: state`forms.user.title`,
    onChange: signal`fieldChanged`,
    onClose: signal`toggleDialog`,
    onSubmit: signal`users.userUpdated`
  },
  ({ title, path = 'forms.user.fields', onChange, onClose, onSubmit }) => (
    <Dialog title={title} onSubmit={onSubmit} onClose={onClose} path={path}>
      <Form path="forms.user.fields">
        <Input path="forms.user.fields.username" onChange={onChange} />
        <Input path="forms.user.fields.firstname" onChange={onChange} />
        <Input path="forms.user.fields.lastname" onChange={onChange} />
        <Input path="forms.user.fields.email" onChange={onChange} />
      </Form>
    </Dialog>
  )
)
