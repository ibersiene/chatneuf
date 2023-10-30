import React, { useEffect, useState } from "react";

const Toast = (props) => {
  const { toast, setToast } = props;
  return (
    toast.show && (
      <div>
        <div
          className={
            "toast  position-fixed end-0 bottom-0 align-items-center text-bg-info border-0 " +
            (toast.show && " show")
          }
          role='alert'
          data-bs-delay='10000'
          aria-live='assertive'
          aria-atomic='true'
        >
          <div className='toast-header'>
            <div className='rounded me-2 bg-danger '>...</div>
            <strong className='me-auto'>Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type='button'
              className='btn-close'
              onClick={() => setToast((t) => ({ msg: "", show: false }))}
            ></button>
          </div>
          <div className='d-flex'>
            <div className='toast-body'>{toast.msg}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default Toast;
