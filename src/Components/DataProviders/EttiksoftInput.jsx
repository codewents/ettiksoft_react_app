import React, { useRef } from 'react'
import "./Common.scss"

export default function EttiksoftInput({
    isModal = false,
    placeholder = '',
    value = '',
    onBlur = '',
    onChangeText = '',
    isError = false,
    error = '',
    max = '',
    label = '',
    disabled = false,
    maxLength = '',
    keyboardType = "text",
    disclaimer = "",
    inputType = "",
    name = '',
    id = '',

}) {
    const ref = useRef(null);

    return (
        <>
            <div className="mb-2">
                {/* <label for="recipient-name" className="col-form-label text-white">Username*</label> */}
                {label && <label for={label} className="form-label col-form-label text-left text-white">{label}</label>}
                <input
                    className={isError ? "form-control bg-dark w-100 error" : "form-control bg-dark w-100"}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    value={value}
                    max={max}
                    onBlur={onBlur}
                    onChange={onChangeText}
                    disabled={disabled}
                    type={inputType ? inputType : keyboardType}
                    ref={ref}
                    name={name}
                    id={id}
                />
                {isError && (
                    <p className="error-code text-decoration-none m-0">{error}</p>
                )}
                {disclaimer && <label className="w-80 disclaimer">
                    {disclaimer}
                </label>}
            </div>
        </>

    )
}