import React, { useContext } from "react";
import ShapeContext from "../../contexts/ShapeContext";
import "./DisplayCoordirnates.css";

const Coordinates = () => {
  const shapeContext = useContext(ShapeContext);
  return (
    <aside className="coordinates-container">
      <h3>Coordinates</h3>
      <div className="coordinates-content">
        <ul>
          <li>Point 1:</li>
          <li>Point 2:</li>
          <li>Point 3:</li>
          <li>Point 4:</li>
        </ul>
        <ul>
          <li>Parallelogram area:</li>
          <li>Circle radius:</li>
        </ul>
      </div>
    </aside>
  );
};

export default Coordinates;
