import React from "react";
import { connect } from "react-redux";
import "./DisplayCoordirnates.css";
import Point from "../../model/Point";

const mapStateToProps = state => ({
  pointsSet: state.pointsSet,
  circleRadius: state.circleRadius
});
let DisplayCoordinates = ({ pointsSet, circleRadius }) => {
  const listOfPoints = Array.from(new Array(4 - pointsSet.length));
  return (
    <aside className="coordinates-container">
      <h3>Coordinates</h3>
      <div className="coordinates-content">
        <ul>
          {[...pointsSet, ...listOfPoints].map((point = new Point(), index) => (
            <li>{`Point ${index + 1}: ${point.x} ${point.y}`}</li>
          ))}
        </ul>
        <ul>
          <li>Parallelogram area:</li>
          <li>Circle radius: {circleRadius}</li>
        </ul>
      </div>
    </aside>
  );
};

DisplayCoordinates = connect(mapStateToProps)(DisplayCoordinates);
export default DisplayCoordinates;
