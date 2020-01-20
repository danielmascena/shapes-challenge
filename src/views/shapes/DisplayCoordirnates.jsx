import React from "react";
import { connect } from "react-redux";
import "./DisplayCoordirnates.css";
import Point from "../../model/Point";

const mapStateToProps = state => ({
  pointsSet: state.pointsSet,
  circleRadius: state.circleRadius,
  parallelogramArea: state.parallelogramArea
});
let DisplayCoordinates = ({ pointsSet, circleRadius, parallelogramArea }) => {
  const listOfPoints = Array.from(new Array(4 - pointsSet.length));
  return (
    <aside className="coordinates-container">
      <h3>Coordinates</h3>
      <div className="coordinates-content">
        <ul>
          {[...pointsSet, ...listOfPoints].map((point = new Point(), index) => (
            <li key={index}>{`Point ${index + 1}: ${point.x} ${parseInt(point.y, 10)}`}</li>
          ))}
        </ul>
        <ul>
          <li>Parallelogram area: {parseInt(parallelogramArea, 10)}</li>
          <li>Circle radius: {parseInt(circleRadius, 10)}</li>
        </ul>
      </div>
    </aside>
  );
};

DisplayCoordinates = connect(mapStateToProps)(DisplayCoordinates);
export default DisplayCoordinates;
