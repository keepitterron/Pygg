import * as React from 'react';

export default function Modal({isOpen, onClose, children}) {
  const modalClasses = () => {
    if(isOpen) return 'modal modal--open';
    return 'modal';
  }

  return <div className={modalClasses()}>
    <button className="btn modal__close" onClick={onClose}>&times;</button>
    {children}
  </div>

}
