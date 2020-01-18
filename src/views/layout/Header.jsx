import React from "react";
import Modal from "../../components/Modal";
import "./header.css";

const Header = ({ modalRef }) => {
  const [modal, setModal] = React.useState(null);

  return (
    <header>
      <h1 className="brand-title">
        <span className="brand-title__text">Shapes</span>
      </h1>
      <nav>
        <a
          onClick={event => {
            modal.current.showModal();
            event.preventDefault();
          }}
        >
          About
        </a>
      </nav>

      <Modal defineModal={setModal} />
    </header>
  );
};

export default Header;