import React from 'react';
import SweetAlert from './SweetAlert';

export default function LoadingAlert(props: any) {
  const onConfirm = () => { props.onConfirm(); };
  const onCancel = () => { props.onCancel(); };

  const param = {
    type: 'info',
    title: 'Please wait...',
    showCancel: false,
    showConfirm: false,
    message: props.message || 'Loading...',
  };

  return (
    <SweetAlert param={param} onConfirm={onConfirm} onCancel={onCancel} />
  )
}
