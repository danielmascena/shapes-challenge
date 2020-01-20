import React from "react";
import Modal from "../../components/Modal";

const About = ({ defineModal }) => (
  <p>
    This application uses the user inputs, three choosed points, on a{" "}
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">
      HTML5 2D Canvas
    </a>
    to draw geometrical shapes: one{" "}
    <a href="https://en.wikipedia.org/wiki/Parallelogram">Parallelogram</a> and
    a inner <a href="https://en.wikipedia.org/wiki/Circle">Circle</a> with the
    same center. For build this application I, the author, use the{" "}
    <a href="https://reactjs.org/">ReactJS</a> library,{" "}
    <a href="https://github.com/konvajs/react-konva">React Konva</a> for an
    easily integration between React and Canvas API, and for the last,{" "}
    <a href="https://redux.js.org/">Redux</a> for serving as a state container
    for JavaScript apps.
  </p>
);

export default Modal("About")(About);
