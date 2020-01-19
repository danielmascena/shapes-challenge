import React, { useEffect } from "react";
import Parallelogram from "../../components/Parallelogram";
import PointCircle from "../../components/PointCircle";
import Point from "../../model/Point";
import actionCreation from "../../actions/shapeAction";

let DrawShapes = ({ points, pointsSet, circleCenter, circleRadius, dispatch }) => {
  useEffect(() => {
    console.log("draw shapes ", points, pointsSet, circleCenter, circleRadius);
  }, [pointsSet.length, points.length]);
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
