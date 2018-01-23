import React from 'react'
import { connect } from '@cerebral/react'
import { state, props, signal } from 'cerebral/tags'
import styles from './styles'
import { field } from '@cerebral/forms'

export default connect(
    {
        field: field(state`${props`path`}`),
        settings: state`settings`,
        fieldChanged: signal`simple.fieldChanged`
    },
    function Input({ name, field, path, settings, fieldChanged }) {
        function onChange(e) {
            fieldChanged({
                field: path,
                value: e.target.value,
                settingsField: 'settings.validateOnChange'
            })
        }
        function onBlur(e) {
            fieldChanged({
                field: path,
                value: e.target.value,
                settingsField: 'settings.validateInputOnBlur'
            })
        }
        function renderError() {
            const { errorMessage } = field
            const { showErrors } = settings
            return (
                <div style={{ color: '#d64242', fontSize: 11 }}>
                    {showErrors && errorMessage}
                </div>
            )
        }
        return (
            <div style={{ marginTop: 10, fontSize: 14 }}>
                {name} {field.isRequired ? '*' : ''}
                <br />
                <input
                    onChange={e => onChange(e)}
                    onBlur={e => onBlur(e)}
                    value={field.value}
                    type={'text'}
                    className={css(styles.input)}
                />
                {renderError()}
            </div>
        )
    }
)
