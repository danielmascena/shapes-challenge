import React from "react";
import About from "../shapes/About";
import "./header.css";

const Header = () => {
  const [modal, setModal] = React.useState(null);

  return (
    <header>
      <h1 className="brand-title">
        <span className="brand-title__text">Shapes</span>
      </h1>
      <nav>
        <input
          className="open-modal-btn"
          type="button"
          onClick={event => {
            modal.current.showModal();
            event.preventDefault();
          }}
          value="About"
        />
      </nav>
      <aside>
        <About defineModal={setModal} />
      </aside>
    </header>
  );
};

export default Header;
