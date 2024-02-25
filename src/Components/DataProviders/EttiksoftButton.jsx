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
            className="ettiksoft-button"
            disabled={disabled}
            type={buttonType}
            onClick={() => {
                onClickAction()
            }}
        >
            <span className='button-tex'>{buttonText}</span>

        </button>
    )
}

export default EttiksoftButton