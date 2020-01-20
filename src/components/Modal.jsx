import React, { useEffect, useRef, Children } from "react";
import dialogPolyfill from "dialog-polyfill";
import "./modal.css";
const Modal = ({ title, defineModal }) => WrappedComponent => {
  return myprops => {
    const modalRef = useRef(null);
    console.log("wrapper ", myprops);
    useEffect(() => {
      //var dialog = document.querySelector("dialog");
      dialogPolyfill.registerDialog(modalRef.current);
      myprops.defineModal(modalRef);
    }, []);
    return (
      <dialog id="about" ref={modalRef}>
        <h3 className="modal-heading">
          <span className="modal-heading__text">{title}</span>
        </h3>
        <div className="modal-content">
          <WrappedComponent />
        </div>
        <button onClick={() => modalRef.current.close()}>Close</button>
      </dialog>
    );
  };
};

export default Modal;
