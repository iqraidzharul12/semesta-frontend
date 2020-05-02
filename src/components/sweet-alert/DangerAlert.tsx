import React from 'react';
import SweetAlert from './SweetAlert';

export default function DangerAlert(props: any) {
  const onConfirm = () => { props.onConfirm(); };
  const onCancel = () => { props.onCancel(); };

  const param = {
    type: 'danger',
    title: 'Attention!',
    confirmBtnBsStyle: 'primary',
    confirmBtnText: 'Ok',
    message: props.message,
    showCancel: false,
    focusConfirmBtn: false,
  };

  return (
    <SweetAlert param={param} onConfirm={onConfirm} onCancel={onCancel} />
  )
}
