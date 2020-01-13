import React, {useEffect, useRef} from "react";
import dialogPolyfill from "dialog-polyfill";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    //var dialog = document.querySelector("dialog");
    dialogPolyfill.registerDialog(modalRef.current);
  }, []);
  return (
    <>
      <Header {...{modalRef}} />
      {children}
      <dialog id="about" ref={modalRef}>
        <h3 className="modal-heading"><span className="modal-heading__text">Shapes</span></h3>
        <p>lorem</p>
        <button onClick={()=>modalRef.current.close()}>Close</button>
      </dialog>
      <Footer />
    </>
  );
};

export default Layout;
