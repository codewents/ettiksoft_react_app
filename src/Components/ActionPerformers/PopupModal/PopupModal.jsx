import React from 'react';
import './PopupModal.scss';
import ettiksoftLogo from '../../../Assets/images/ettiksoft-logo.png';
import EttiksoftInput from '../../DataProviders/EttiksoftInput';

const PopupModal = ({ type }) => {
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark" style={type === "Enquiry" ? { width: '90%' } : { width: '70%' }}>
                    <div className="modal-header">
                        <img src={ettiksoftLogo} alt="" srcSet="" height={100} width={200} />
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {type === 'Signin' && (
                            <form>
                                <EttiksoftInput type={'text'} label={'Username*'} />
                                <EttiksoftInput type={'text'} label={'Password*'} />
                            </form>
                        )}
                        {type === "Enquiry" && (
                            <form>
                                <div className="d-flex" style={{ 'gap': '1rem' }}>
                                    <EttiksoftInput type={'text'} label={'First Name*'} />
                                    <EttiksoftInput type={'text'} label={'Last Name*'} />
                                </div>
                                <EttiksoftInput type={'text'} label={'Business Email'} />
                                <EttiksoftInput type={'text'} label={'Business Name'} />
                                <div className="d-flex" style={{ 'gap': '1rem' }}>
                                    <EttiksoftInput type={'text'} label={'ext'} />
                                    <EttiksoftInput type={'text'} label={'Contact Number'} />
                                </div>
                                <EttiksoftInput type={'text'} label={'Product'} />
                                <EttiksoftInput type={'text'} label={'Type of Query'} />
                                <EttiksoftInput type={'text'} label={'Your Message'} />
                            </form>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-success">Signin</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupModal;
