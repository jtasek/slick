import React from 'react'
import { connect } from '@cerebral/react'
import { state, props, signal } from 'cerebral/tags'
import { field } from '@cerebral/forms'
import styles from './styles.css'

export default connect(
  {
    field: field(state`${props`path`}`),
    fieldChanged: signal`fieldChanged`,
    showErrors: state`${props`path`}.showErrors`
  },
  function({ field, path, showErrors = true, fieldChanged }) {
    function onChange(e) {
      e.preventDefault()
      fieldChanged({
        field: path,
        value: e.target.value,
        eventType: 'change'
      })
    }

    function onBlur(e) {
      e.preventDefault()
      fieldChanged({
        field: path,
        value: e.target.value,
        eventType: 'blur'
      })
    }

    function renderLabel() {
      return field.label ? (
        <label forhtml={field.name}>
          {field.label}
          {field.isRequired ? '*' : ''}
        </label>
      ) : null
    }

    function renderInput() {
      return (
        <input
          name={path}
          type={field.type}
          title={field.label}
          // value={field.value}
          placeholder={field.defaultValue}
          // onBlur={e => onBlur(e)}
          onChange={e => onChange(e)}
        />
      )
    }

    function renderError() {
      return showErrors && !field.isPristine && !field.isValid ? (
        <div className={styles.error}>
          Invalid field value{field.errorMessage}
        </div>
      ) : null
    }

    return (
      <div>
        {renderLabel()}
        {renderInput()}
        {renderError()}
      </div>
    )
  }
)
