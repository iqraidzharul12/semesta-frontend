import React from 'react';
import SweetAlert from './SweetAlert';

export default function SuccessAlert(props: any) {
  const onConfirm = () => { props.onConfirm(); };
  const onCancel = () => { props.onCancel(); };

  const param = {
    type: 'success',
    title: props.title || 'Congratulation!',
    confirmBtnBsStyle: 'success',
    confirmBtnText: 'Ok',
    message: props.message || 'Action Success',
    showCancel: false,
    focusConfirmBtn: true,
  };

  return (
    <SweetAlert param={param} onConfirm={onConfirm} onCancel={onCancel} />
  )
}
