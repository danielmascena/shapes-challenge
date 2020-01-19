import React, { useEffect } from "react";
import Parallelogram from "../../components/Parallelogram";
import PointCircle from "../../components/PointCircle";
import Point from "../../model/Point";
import actionCreation from "../../actions/shapeAction";
import * as shapeUtils from "../../utils/shapeUtils";

let DrawShapes = ({ points, pointsSet, circleCenter, circleRadius, dispatch }) => {
  useEffect(() => {
    if (pointsSet.length === 3) {
      console.log("time to set the fourth point ", points, pointsSet, circleCenter, circleRadius);
    }
    console.log("draw shapes", circleCenter)
  }, [pointsSet.length]);
  return (
    <React.Fragment>
      {pointsSet.map((point, index) => (
        <PointCircle
          point={point}
          radius={11}
          index={index}
          draggable={true}
          fill="red"
          updateCoords={point => dispatch.call(null, actionCreation.updatePoint(index, point))}
        />
      ))}
      <Parallelogram linePoints={points} />

      {circleCenter instanceof Point && (
        <PointCircle
          point={circleCenter}
          radius={circleRadius}
          stroke="yellow"
        />
      )}
    </React.Fragment>
  );
};

export default DrawShapes;
