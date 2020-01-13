import React from "react";
import "./header.css";

const Header = ({modalRef}) => (
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
    
  </header>
);

export default Header;
