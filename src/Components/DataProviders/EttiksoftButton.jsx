import React, { useState } from 'react';
import './Common.scss';
import arrowWhite from '../../Assets/images/right-arrow-white.svg';
import arrowBlack from '../../Assets/images/right-arrow-black.svg';

const EttiksoftButton = ({
    buttonText,
    buttonType,
    disabled,
    onClickAction,
    modalChange = false,
}) => {
    const [buttonStyle, setButtonStyle] = useState('white');

    return (
        <>
            {buttonType === 'bootstrap' && (
            <button
            data-bs-toggle="modal" data-bs-target="#staticBackdrop"
            className="ettiksoft-button"
            disabled={disabled}
            style={{
                backgroundColor: buttonStyle === 'black' ? 'white' : 'transparent',
                transform: buttonStyle === 'black' ? 'scale(1.1)' : 'scale(1)',
                transition: 'background-color 0.3s, transform 0.3s',
            }}
            onClick={onClickAction}
            onMouseEnter={() => {
                setButtonStyle('black');
            }}
            onMouseLeave={() => {
                setButtonStyle('white');
            }}
        >
            <div className="d-flex align-items-center justify-content-center">
                <span className={`button-text ${buttonStyle === 'black' ? 'text-black' : ''}`}>
                    {buttonText}
                </span>
                <img src={buttonStyle === 'black' ? arrowBlack : arrowWhite} alt="" height={20} width={30} />
            </div>
        </button>
        )}
        {buttonType !== 'bootstrap' && (
            <button
            className="ettiksoft-button"
            disabled={disabled}
            type={buttonType}
            style={{
                backgroundColor: buttonStyle === 'black' ? 'white' : 'transparent',
                transform: buttonStyle === 'black' ? 'scale(1.1)' : 'scale(1)',
                transition: 'background-color 0.3s, transform 0.3s',
            }}
            onClick={onClickAction}
            onMouseEnter={() => {
                setButtonStyle('black');
            }}
            onMouseLeave={() => {
                setButtonStyle('white');
            }}
        >
            <div className="d-flex align-items-center justify-content-center">
                <span className={`button-text ${buttonStyle === 'black' ? 'text-black' : ''}`}>
                    {buttonText}
                </span>
                <img src={buttonStyle === 'black' ? arrowBlack : arrowWhite} alt="" height={20} width={30} />
            </div>
        </button>
        )}
        </>
    );
};

export default EttiksoftButton;
