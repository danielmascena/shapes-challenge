import React, { useEffect, useRef } from "react";
import dialogPolyfill from "dialog-polyfill";
import "./header.css";

const Header = () => {
  const modalRef = useRef(null);
  useEffect(() => {
    //var dialog = document.querySelector("dialog");
    dialogPolyfill.registerDialog(modalRef.current);
  }, []);
  return (
    <header>
      <h1 className="brand-title">
        <span className="brand-title__text">Shapes</span>
      </h1>
      <nav>
        <a
          onClick={event => {
            modalRef.current.showModal();
            event.preventDefault();
          }}
        
        >
          About
        </a>
      </nav>
      <dialog id="about" ref={modalRef}>
        <h3 className="brand-modal">Shapes</h3>
        <p>lorem</p>
        <button onClick={()=>modalRef.current.close()}>Close</button>
      </dialog>
    </header>
  );
};

export default Header;
