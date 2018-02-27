import React from 'react'
import { connect } from '@cerebral/react'
import { form } from '@cerebral/forms'
import { state, props, signal } from 'cerebral/tags'
import Dialog from '../../../components/Dialog'
import Form from '../../../components/Form'
import Input from '../../../components/Input'

export default connect(
  {
    title: state`forms.organization.title`,
    onChange: signal`fieldChanged`,
    onClose: signal`toggleDialog`,
    onSubmit: signal`organizations.organizationCreated`
  },
  ({ title, path = 'forms.organization', onChange, onClose, onSubmit }) => (
    <Dialog title={title} onSubmit={onSubmit} onClose={onClose} path={path}>
      <Form path="forms.organization.fields">
        <Input path="forms.organization.fields.name" onChange={onChange} />
        <Input
          path="forms.organization.fields.description"
          onChange={onChange}
        />
      </Form>
    </Dialog>
  )
)
