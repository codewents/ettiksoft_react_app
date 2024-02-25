import React from 'react'
import "./Common.scss"


const GTPCheckBox = ({
    label,
    disabled = false,
    name,
    id,
    value =  'true',
    onBlur,
    onChangeText,
    isError,
    error,
}) => {
    return (
        <div className="custom-checkbox-container d-flex w-100">
            <input type="checkbox" className="custom-checkbox"
                id={id ? `customCheckbox ${id}` : "customCheckbox"}
                name={name}
                value={value}
                onBlur={onBlur}
                onChange={onChangeText}
                disabled={disabled}
            />
            <p className={isError? "checkbox-label mb-0 error" : "checkbox-label mb-0"}>{label}</p>
        </div>
    )
}

export default GTPCheckBox