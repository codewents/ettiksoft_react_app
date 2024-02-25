import React from 'react'
import './Common.scss'
const EttiksoftButton = ({
    buttonText,
    buttonType,
    disabled,
    onClickAction,
    modalChange = false,
}) => {
    return (
        <button
            className="ettiksoft-button p-3"
            disabled={disabled}
            type={buttonType}
            onClick={() => {
                onClickAction()
            }}
        >
            <span className='button-text'>{buttonText}</span>

        </button>
    )
}

export default EttiksoftButton