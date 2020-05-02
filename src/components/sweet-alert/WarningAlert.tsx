import React from 'react';
import SweetAlert from './SweetAlert';

export default function WarningAlert(props: any) {
  const onConfirm = () => { props.onConfirm(); };
  const onCancel = () => { props.onCancel(); };

  const param = {
    type: 'warning',
    title: 'Attention!',
    confirmBtnBsStyle: 'primary',
    cancelBtnBsStyle: 'danger',
    message: props.message || 'This action cannot be undo. Are you sure?',
    showCancel: true,
    focusConfirmBtn: false,
  };

  return (
    <SweetAlert param={param} onConfirm={onConfirm} onCancel={onCancel} />
  )
}
