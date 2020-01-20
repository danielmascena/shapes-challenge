import React from "react";
import Modal from "../../components/Modal";

const About = ({ defineModal }) => (
  <p>
    This application was developed by <strong>Daniel Mascena</strong>. His
    purpose is to use the user inputs, three choosed (clicked) points, on a{" "}
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">
      HTML5 2D Canvas
    </a>{" "}
    to draw geometrical shapes: one{" "}
    <a href="https://en.wikipedia.org/wiki/Parallelogram">Parallelogram</a> and
    a inner <a href="https://en.wikipedia.org/wiki/Circle">Circle</a> with the
    same center. To build this application I use the follow stack:{" "}
    <a href="https://reactjs.org/">ReactJS</a> UI Component library,{" "}
    <a href="https://github.com/konvajs/react-konva">React Konva</a> for an
    easily integration between React and Canvas API, and for the last,{" "}
    <a href="https://redux.js.org/">Redux</a> for serving as a state container
    for JavaScript apps.
  </p>
);

export default Modal("About")(About);
